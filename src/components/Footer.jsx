import React from "react";
import Logo from "../assets/logo.svg";
import xSocial from "../assets/social-x.svg";
import insta from "../assets/social-instagram.svg";
import youtube from "../assets/social-youtube.svg";
const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <a href="#">
              <img src={Logo} alt="logo" className="h-6 w-6" />
            </a>
            <h2 className="font-medium">Ai Startup Landing Page</h2>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-white/70 hover:text-white transition text-xs md:text-sm "
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition text-xs md:text-sm "
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition text-xs md:text-sm "
              >
                Company
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition text-xs md:text-sm "
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition "
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="gap-5 flex lg:flex-1 lg:justify-end">
            <a href="#">
              <img
                src={xSocial}
                alt="x"
                className="opacity-70 hover:opacity-100 transition"
              />
            </a>
            <a href="#">
              <img
                src={insta}
                alt="instgram"
                className="opacity-70 hover:opacity-100 transition"
              />
            </a>
            <a href="#">
              <img
                src={youtube}
                alt="Youtube"
                className="opacity-70 hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
