import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projetos from "./components/Projetos";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home" className="scroll-mt-32">
        <Hero />
      </section>
      <Carousel />
      <section id="about" className="scroll-mt-32">
        <About />
      </section>
      <section id="portfolio" className="scroll-mt-32">
        <Projetos />
      </section>
    </main>
  );
}
