import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 px-16 flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto">
    {/* Left Section: Branding and Rights */}
    <div className="text-lg text-center md:text-left">
      <p>© 2024 Team Project-One. All rights reserved.</p>
    </div>

    {/* Center Section: Useful Links */}
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
      <a href="/AboutUs" className="hover:text-gray-400">About Us</a>
      <a href="/return-policy" className="hover:text-gray-400">Return Policy</a>
      <a href="/contactus" className="hover:text-gray-400">Contact Us</a>
    </div>

    {/* Right Section: Social Media Links */}
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500"
      >
        <FaInstagram className="text-3xl" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaFacebook className="text-3xl" />
      </a>
    </div>
  </footer>
  );
};

export default Footer;
