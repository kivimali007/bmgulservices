
import type { Metadata } from "next";

import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Portfolio from "./components/Portfolio/Portfolio";
import Forms from "./components/Forms/forms";

export const metadata: Metadata = {
  title: "BM Gulvservice | Professionel Gulvafslibning",
  description:
    "BM Gulvservice tilbyder professionel gulvafslibning, gulvafhøvling og gulvbehandling i København og omegn.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Forms />
    </main>
  );
}
