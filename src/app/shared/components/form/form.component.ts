import {
  Component, ChangeDetectionStrategy, Input,
  OnChanges, Output, EventEmitter
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/dashboard/register/service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnChanges {

  @Input()
  props: any;

  @Input()
  formValues: any;

  @Input()
  formName: string;

  @Input()
  id: number;

  @Output()
  submitted = new EventEmitter();

  form: FormGroup;
  formProps: any = [];
  formDataObj: any = {};

  isEdit = false;


  constructor(private formService: FormService) { }

  ngOnChanges(): void {
    if (this.formValues) {
      this.form.patchValue(this.formValues);
      this.isEdit = true;
    } else { this.initializeForm(); }
  }

  initializeForm(): void {
    for (const prop of Object.keys(this.props)) {
      this.formDataObj[prop] = new FormControl(this.props[prop].value,
        this.mapValidator(this.props[prop].validators));
      this.formProps.push({
        key: prop,
        label: this.props[prop].label,
        type: this.props[prop].type,
        className: this.props[prop].className,
        placeholder: this.props[prop].placeholder || '',
        options: this.props[prop].options || [],
      });
    }
    this.form = new FormGroup(this.formDataObj);
  }

  mapValidator(validators: any): any {
    if (validators) {
      return Object.keys(validators).map((validationType): any | void => {
        if (validationType === 'required') {
          return Validators.required;
        }
        else if (validationType === 'max') {
          return Validators.max(validators[validationType]);
        }
        else if (validationType === 'number') {
          return Validators.pattern(/^-?(0|[1-9]\d*)?$/);
        }
      });
    }
    else { return []; }
  }

  submit(): void {
    if (this.isEdit) {
      if (this.formName === 'educations') {
        this.formService.editEducation.next(false);
        this.formService.updateEducation(this.id, this.form.value);
      }
      else {
        this.formService.editLanguage.next(false);
        this.formService.updateLanguage(this.id, this.form.value);
      }
      this.isEdit = false;
      this.form.reset();
    } else {
      if (this.formName === 'educations') {
        this.formService.addEducation(this.form.value);
      } else { this.formService.addLanguage(this.form.value); }
    }
  }

}
