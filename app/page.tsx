import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projetos from "./components/Projetos";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Carousel />
      <About />
      <Projetos />
    </main>
  );
}
