// ProjectCarousel.jsx
const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      category: "iOS App",
      title: "Bookshelf",
      description: "A beautiful home for your books",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      category: "Framer Website",
      title: "Lux",
      description: "An immersive photography template",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      category: "Android App",
      title: "Bankify",
      description: "Track your spending with ease",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "React Native",
      title: "Coinstar",
      description: "Manage your finances with ease",
    },
  ];

  // Duplicar os projetos para loop infinito
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden bg-black py-20">
      {/* Gradientes de fade nas bordas */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Track do carrossel */}
      <div className="flex gap-6 animate-scroll hover:pause">
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="group relative h-[280px] w-[400px] flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
          >
            {/* Imagem */}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay com informações */}
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-white/70">
                {project.category}
              </p>
              <h3 className="mb-1.5 text-2xl font-bold leading-tight text-white">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/85">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
