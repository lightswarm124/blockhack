// app/page.jsx
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Prizes from "./components/Prizes";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import SponsorReachout from "./components/SponsorReachout";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Prizes />
      <Schedule />
      <Sponsors />
      <SponsorReachout />
      <CTA />
    </>
  );
}
