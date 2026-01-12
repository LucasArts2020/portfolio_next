"use client";

import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <>
      <div className="fixed flex justify-between md:justify-center items-center gap-4 py-3 px-6 md:px-10 left-1/2 top-[20px] rounded-3xl text-white z-50 -translate-x-1/2 w-[90%] md:w-auto min-w-0 md:min-w-[400px] transition-all duration-300">
        <GlassBackground idSuffix="header" />

        <div className="md:hidden text-lg font-bold relative z-10">
          LUCAS.DEV
        </div>

        <nav className="hidden md:block relative z-10">
          <ul className="flex gap-10 text-lg font-medium">
            {navItems.map((item) => (
              <li className="relative group" key={item.name}>
                <a
                  href={item.href}
                  className="block py-1 hover:text-gray-200 transition-colors"
                >
                  {item.name}
                </a>

                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] rounded-xl bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden relative z-50 p-1 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] md:hidden z-40 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="relative p-8 flex flex-col items-center gap-6 text-white">
            <GlassBackground idSuffix="mobile" />

            <ul className="flex flex-col items-center gap-6 text-xl relative z-10 w-full">
              {navItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <a
                    href={item.href}
                    className="block w-full py-3 hover:bg-white/10 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <SVGFilters />
    </>
  );
};

const GlassBackground = ({ idSuffix }: { idSuffix: string }) => (
  <>
    <div className="absolute inset-0 rounded-3xl bg-black/50 -z-20" />
    <div
      className="absolute inset-0 rounded-3xl backdrop-blur-md -z-10"
      style={{ filter: "url(#header-glass)" }}
    />
    <div className="absolute inset-0 rounded-3xl bg-white/5 shadow-[inset_2px_2px_0px_-2px_rgba(255,255,255,0.4),inset_0_0_3px_1px_rgba(255,255,255,0.3)] z-0" />
  </>
);

const SVGFilters = () => (
  <svg style={{ display: "none" }}>
    <defs>
      <filter id="header-glass">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurred" />
        <feTurbulence
          type="turbulence"
          baseFrequency="0.02"
          numOctaves="3"
          seed="2"
          result="turb"
        />
        <feDisplacementMap
          in="blurred"
          in2="turb"
          scale="25"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displaced"
        />
        <feColorMatrix
          in="displaced"
          type="saturate"
          values="1.5"
          result="saturated"
        />
      </filter>
    </defs>
  </svg>
);

export default Header;
