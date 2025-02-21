import { FaDiscord, FaYoutube, FaMedium, FaGoogle } from "react-icons/fa";
import {FaG} from "react-icons/fa6";

const socialLinks = [
  { href: "https://discord.gg/3DUyvz3j", icon: <FaDiscord /> },
  { href: "https://www.youtube.com/@SmritaCodes", icon: <FaYoutube /> },
  { href: "mailto:smrita.official@gmail.com", icon: <FaGoogle/> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-8 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
