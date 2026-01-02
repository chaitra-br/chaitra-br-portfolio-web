import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/MyProjects/Projects";
import Experience from "@/components/Experience/Experience";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import BackToTop from "../components/BackToTop/BackToTop";

export default function Home() {
  return (
    <>
      <Landing />
      <BackToTop />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
