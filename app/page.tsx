// app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutBarbershop from '../components/AboutBarbershop';
import Services from "../components/Services";
import Masters from "../components/Masters";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <AboutBarbershop />
      <Services />
      <Masters />
      <Footer />
    </>
  );
}