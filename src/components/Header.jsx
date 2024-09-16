import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";
import Button from "../constants/Button";
import Link from "react-scroll/modules/components/Link";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
        <div className="container">
          <div className="flex justify-between items-center md:border border-white/50 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
            <div className="border h-10 w-10 border-white/15 rounded-lg inline-flex justify-center items-center">
              <Link to={"developers"} spy={true} smooth={true} offset={-200}>
                <img className="w-8 h-8 " src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8  text-sm">
                <Link
                  to={"developers"}
                  spy={true}
                  smooth={true}
                  className="text-white/70 hover:text-white transition "
                >
                  Developers
                </Link>
                <Link
                  to={"feature"}
                  spy={true}
                  smooth={true}
                  className="text-white/70 hover:text-white transition "
                >
                  Features
                </Link>
                <Link
                  to={"pricing"}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  className="text-white/70 hover:text-white transition "
                >
                  Client
                </Link>
                <Link
                  to={"changelog"}
                  spy={true}
                  smooth={true}
                  className="text-white/70 hover:text-white transition "
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="flex gap-4 items-center">
              <Button title="Join Waitlist" />
              <div className="flex md:hidden ">
                <button onClick={toggleNavbar}>
                  {navOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {navOpen && (
        <div className="container  text-center h-full fixed right-0 z-20 bg-white/20 backdrop-blur-sm w-full p-12 flex flex-col justify-center items-center md:hidden ">
          <nav className="flex flex-col gap-8  text-xl">
            <Link
              to={"developers"}
              spy={true}
              smooth={true}
              className="text-white/70 hover:text-white transition "
              onClick={toggleNavbar}
            >
              Developers
            </Link>
            <Link
              to={"feature"}
              spy={true}
              smooth={true}
              offset={-30}
              className="text-white/70 hover:text-white transition "
              onClick={toggleNavbar}
            >
              Features
            </Link>
            <Link
              to={"pricing"}
              spy={true}
              smooth={true}
              offset={-100}
              className="text-white/70 hover:text-white transition "
              onClick={toggleNavbar}
            >
              Client
            </Link>
            <Link
              to={"changelog"}
              spy={true}
              smooth={true}
              offset={-100}
              className="text-white/70 hover:text-white transition "
              onClick={toggleNavbar}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
