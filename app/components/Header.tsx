"use client";

import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const listItems = ["Home", "About", "Portfolio"];

  return (
    <>
      {/* --- BARRA DE NAVEGAÇÃO PRINCIPAL --- */}
      <div className="fixed flex justify-between items-center gap-4 md:gap-16 py-3 px-6 md:px-10 left-1/2 top-[20px] rounded-3xl text-white z-50 -translate-x-1/2 w-[90%] md:w-auto transition-all duration-300">
        {/* Camadas de Fundo (Vidro) - Reutilizáveis */}
        <GlassBackground idSuffix="header" />

        {/* --- DESKTOP: Menu Horizontal --- */}
        <ul className="hidden md:flex gap-8 text-xl relative z-10">
          {listItems.map((item) => (
            <li className="relative group cursor-pointer" key={item}>
              {item}
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* --- MOBILE: Logo ou Texto (Opcional, para não ficar vazio na esquerda) --- */}
        <div className="md:hidden text-lg font-bold relative z-10">
          LUCAS.DEV
        </div>

        {/* --- DESKTOP & MOBILE: Botão de Contato --- */}
        {/* No mobile, escondemos o texto e deixamos só um ícone ou ajustamos o tamanho, 
            aqui optei por manter o botão mas ocultá-lo em telas muito pequenas se necessário, 
            ou mantê-lo ao lado do hamburger. */}
        <div className="flex items-center gap-4 relative z-10">
          <button className="hidden sm:block overflow-hidden py-1 px-6 rounded-3xl text-white text-lg font-semibold transition-all duration-300 relative group">
            {/* Fundo do botão (Vidro) */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: -2 }}
            />
            <div
              className="absolute inset-0 rounded-full backdrop-blur-sm [filter:url(#btn-glass)]"
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  "inset 2px 2px 0px -2px rgba(255, 255, 255, 0.4), inset 0 0 3px 1px rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgb(255 255 255 / 5%)",
                zIndex: 0,
              }}
            />
            <span className="relative z-10">Contact</span>
          </button>

          {/* --- MOBILE: Botão Hamburger --- */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Ícone X (Fechar)
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
              // Ícone Hamburger (Menu)
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
      </div>

      {/* --- MENU MOBILE (Dropdown) --- */}
      {/* Renderiza apenas se estiver aberto */}
      {isMobileMenuOpen && (
        <div className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] md:hidden z-40 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="relative p-6 flex flex-col items-center gap-6 text-white">
            {/* Camadas de Fundo (Vidro) - Reutilizando o estilo */}
            <GlassBackground idSuffix="mobile" />

            <ul className="flex flex-col items-center gap-6 text-xl relative z-10 w-full">
              {listItems.map((item) => (
                <li
                  className="relative group cursor-pointer w-full text-center py-2 hover:bg-white/5 rounded-xl transition-colors"
                  key={item}
                  onClick={() => setIsMobileMenuOpen(false)} // Fecha ao clicar
                >
                  {item}
                </li>
              ))}
              {/* Botão Contact versão Mobile (dentro do menu) */}
              <li className="sm:hidden w-full">
                <button className="w-full py-3 bg-white/10 rounded-xl font-bold border border-white/10">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* --- SVG FILTERS (Definições) --- */}
      <SVGFilters />
    </>
  );
};

// --- COMPONENTES AUXILIARES PARA LIMPAR O CÓDIGO ---

// 1. Componente de Fundo Vidro (Extraído para não repetir código no Menu Mobile)
const GlassBackground = ({ idSuffix }: { idSuffix: string }) => (
  <>
    {/* Camada escura */}
    <div
      className="absolute inset-0 rounded-3xl"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: -2,
      }}
    />
    {/* Camada filtro/distorção */}
    <div
      className="absolute inset-0 rounded-3xl backdrop-blur-md"
      style={{
        zIndex: -1,
        filter: "url(#header-glass)", // Usando o mesmo filtro
      }}
    />
    {/* Camada borda brilhante */}
    <div
      className="absolute inset-0 rounded-3xl"
      style={{
        boxShadow:
          "inset 2px 2px 0px -2px rgba(255, 255, 255, 0.4), inset 0 0 3px 1px rgba(255, 255, 255, 0.3)",
        backgroundColor: "rgb(255 255 255 / 5%)",
        zIndex: 0,
      }}
    />
  </>
);

// 2. Componente de Definições SVG (Fica escondido)
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

      <filter id="btn-glass">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="0.8"
          result="blurred"
        />
        <feTurbulence
          type="turbulence"
          baseFrequency="0.03"
          numOctaves="2"
          seed="5"
          result="turb"
        />
        <feDisplacementMap
          in="blurred"
          in2="turb"
          scale="15"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displaced"
        />
        <feColorMatrix
          in="displaced"
          type="saturate"
          values="2"
          result="saturated"
        />
      </filter>
    </defs>
  </svg>
);

export default Header;
