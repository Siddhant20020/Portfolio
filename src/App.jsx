import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Navbar from "./components/navBar";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Projects from "./containers/project";

import particlesConfig from "./utils.js/particles";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App relative min-h-screen bg-[var(--yellow-theme-background-color)] text-[var(--yellow-theme-sub-text-color)]">
      {/* Navbar fixed on top */}
      <Navbar />

      {/* Particles as background on home page */}
      {renderParticleJsInHomePage && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          init={handleInit}
          className="fixed top-0 left-0 w-full h-full -z-10"
        />
      )}

      {/* Main content */}
      <main className="App__main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
