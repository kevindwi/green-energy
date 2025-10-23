const Footer = () => {
  return (
    <footer className="bg-neutral-900 shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="text-2xl font-medium text-white">
              Green Energy
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-neutral-800 mx-auto  lg:my-8" />
        <span className="block text-sm text-neutral-500 text-center ">
          Copyright © 2025 Green Energy. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
