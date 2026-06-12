import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import WhoAmISection from "./components/WhoAmISection";
import FooterSection from "./components/FooterSection";
// import SayHelloSection from "./Pages/SayHelloSection";
import MenuSection from "./components/MenuSection";
import { Route, Routes } from "react-router-dom";
import SayHelloSection from "./components/SayHelloSection";
import MyProjects from "./components/MyProjects";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <div className="overflow-hidden">
      <ReactLenis root options={{ duration: 2.5 }} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProjectSection />
              <WhoAmISection />
              <FooterSection />
            </>
          }
        />

        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<SayHelloSection />} />
        <Route path="/footer" element={<FooterSection />} />
        <Route path="/menu" element={<MenuSection />} />
      </Routes>
    </div>
  );
};

export default App;
