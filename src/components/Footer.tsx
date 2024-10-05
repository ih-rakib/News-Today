import { Button } from "@/components/ui/button";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800">Daily News</h2>
            <p className="mt-2 text-slate-600">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-slate-600">
            <a href="/about" className="hover:text-slate-900 transition-colors">
              About Us
            </a>
            <a
              href="/services"
              className="hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <AiOutlineTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <AiOutlineInstagram size={28} />
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <AiOutlineGithub size={28} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-center md:text-left">
            &copy; 2024 News Today | All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <Button className="bg-slate-700 text-slate-100 hover:bg-slate-800 transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
