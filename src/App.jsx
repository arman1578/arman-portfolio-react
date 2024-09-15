import About from "./componenst/About";
import Contact from "./componenst/Contact";
import Education from "./componenst/Education";
import Hero from "./componenst/Hero";
import Navbar from "./componenst/Navbar";
import Projects from "./componenst/Projects";
import Technologies from "./componenst/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialialiased 
      selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 z-[-2] h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        </div>
      </div>
      <div className="container mx-auto lg:px-4 px-6">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;