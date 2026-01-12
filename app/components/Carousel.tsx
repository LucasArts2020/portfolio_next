import LogoLoop from "../Animation/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRust,
  SiPhp,
  SiTsnode,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiRust />,
    title: "Rust lang",
    href: "https://rust-lang.org/",
  },
  {
    node: <SiPhp />,
    title: "php",
    href: "https://www.php.net/",
  },
  {
    node: <SiTsnode />,
  },
];

export default function Carousel() {
  return (
    <div className="w-full py-8 relative overflow-hidden flex items-center justify-center bg-transparent">
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={90} // Tamanho dos ícones
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000" // Mudei para preto para combinar com seu fundo (ajuste se precisar)
        ariaLabel="Technology partners"
      />
    </div>
  );
}
