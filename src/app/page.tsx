import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
   <div>
 <Hero/>
 <About/>
 <Service/>
 <Skills/>
 <Portfolio/>
 <Contact/>
   </div>
  );
}