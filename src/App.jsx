import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import Contact from "./components/contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
