const Header = () => {
  const listItems = ["Home", "About", "Services", "Portfolio", "Blog"];

  return (
    <>
      <div className="fixed flex justify-between items-center gap-16 py-3 px-10 left-1/2 top-[20px] rounded-3xl text-white z-50 -translate-x-1/2 w-auto">
        {/* Camada de fundo escuro */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -2,
          }}
        />

        {/* Camada de filtro/distorção */}
        <div
          className="absolute inset-0 rounded-3xl backdrop-blur-md [filter:url(#header-glass)]"
          style={{ zIndex: -1 }}
        />

        {/* Camada de borda brilhante */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            boxShadow:
              "inset 2px 2px 0px -2px rgba(255, 255, 255, 0.4), inset 0 0 3px 1px rgba(255, 255, 255, 0.3)",
            backgroundColor: "rgb(255 255 255 / 5%)",
            zIndex: 0,
          }}
        />

        {/* Conteúdo */}
        <ul className="flex gap-8 text-xl relative z-10">
          {listItems.map((item) => (
            <li className="relative group cursor-pointer" key={item}>
              {item}
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button className="relative z-10 overflow-hidden py-1 px-6 rounded-3xl text-white text-lg font-semibold transition-all duration-300">
          {/* Camada de fundo escuro do botão */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: -2,
            }}
          />

          {/* Camada de filtro do botão */}
          <div
            className="absolute inset-0 rounded-full backdrop-blur-sm [filter:url(#btn-glass)]"
            style={{ zIndex: -1 }}
          />

          {/* Borda brilhante do botão */}
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
      </div>

      {/* SVG Filters */}
      <svg style={{ display: "none" }}>
        <defs>
          {/* Filtro para o header */}
          <filter id="header-glass">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1"
              result="blurred"
            />
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

          {/* Filtro para o botão */}
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
    </>
  );
};

export default Header;
