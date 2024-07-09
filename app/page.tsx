import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </main>
  );
}
