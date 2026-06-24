import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Oneko from './components/Oneko';
import BackgroundRipple from './components/BackgroundRipple';

function App() {
  return (
    <>
      <BackgroundRipple />
      <Oneko />
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;