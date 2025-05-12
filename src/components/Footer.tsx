
import { Flag } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-americano-navy text-white pt-12 pb-6">
      <div className="american-flag-banner w-full h-8 mb-6 flex">
        <div className="flag-blue w-1/3 h-full bg-americano-blue flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star mx-1"></span>
          ))}
        </div>
        <div className="flag-stripes w-2/3 h-full flex flex-col">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`h-1/3 ${i % 2 === 0 ? "bg-americano-red" : "bg-white"}`}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <Flag size={24} className="text-americano-red mr-2" />
              <span className="font-bold text-2xl">Jahongir</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Full-Stack Developer specializing in creating exceptional digital experiences with clean and efficient code.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
            <SocialLinks className="justify-center md:justify-end" iconSize={22} />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-3 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Jahongir Raxmatjonov. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">Made with 🇺🇸 American style</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
