import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhatIDo } from "./components/WhatIDo";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { WhyMe } from "./components/WhyMe";
import { Interests } from "./components/Interests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { C } from "./tokens";

function Divider() {
  return (
    <div style={{ height: 1, backgroundColor: "#e5e7eb" }} />
  );
}

export default function App() {
  return (
    <div
      style={{
        backgroundColor: C.white,
        minHeight: "100vh",
        color: C.graphite,
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <WhatIDo />
        <Divider />
        <Projects />
        <Divider />
        <Process />
        <Divider />
        <WhyMe />
        <Divider />
        <Interests />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
