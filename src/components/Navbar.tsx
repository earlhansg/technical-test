const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-8">
        <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
