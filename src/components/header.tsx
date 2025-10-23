const Header = () => {
  return (
    <header className="py-4">
      <nav className="flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-medium text-white">
            Green Energy
          </a>
        </div>
        <div className="flex gap-x-2">
          <a href="/" className="text-sm text-white px-4 py-3">
            Home
          </a>
          <a href="/about" className="text-sm text-white px-4 py-3">
            About
          </a>
          <a href="#" className="text-sm text-white px-4 py-3">
            Service
          </a>
          <a href="#" className="text-sm text-white px-4 py-3">
            Projects
          </a>
          <a href="#" className="text-sm text-white px-4 py-3">
            Contact
          </a>

          <a
            href="#"
            className="text-sm text-white bg-black rounded-lg px-4 py-3"
          >
            Request Proposal
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
