import logo from "../assets/armanjoarderlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="lg:mb-20 mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img onClick={() => window.location.reload()} className="mx-auto h-18 w-28 lg:h-20 lg:w-36 mt-2 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl lg:text-4xl">
        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/md-arman-joarder-108840253/", "_blank")} className="hover:text-cyan-400 cursor-pointer " alt="linkedin" />
        <FaGithub className="hover:text-cyan-400 cursor-pointer" alt="github" />
        <FaTwitter className="hover:text-cyan-400 cursor-pointer" alt="twitter" />
        <FaFacebook className="hover:text-cyan-400 cursor-pointer" alt="facebook" />
      </div>
    </nav>
  );
};

export default Navbar;