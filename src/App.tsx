import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="text-center bg-gray-100 h-[100vh]">
        <Home />
      </section>
      <section id="about" className="flex flex-col justify-center text-center bg-gray-100 h-[100vh]">
        <h2 className="text-2xl font-semibold text-blue-500">About Us</h2>
        <p className="mt-4">We provide exceptional service and solutions.</p>
      </section>
      <section id="contact" className="flex flex-col gap-5 px-10 justify-center text-center h-[100vh]">
        <h2 className="text-2xl font-semibold text-blue-500">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
