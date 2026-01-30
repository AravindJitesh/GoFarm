import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -96;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "services", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-green-900/80 backdrop-blur shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-semibold
                     bg-gradient-to-r from-emerald-600 to-lime-300
                     bg-clip-text text-transparent"
        >
          GoFarm
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6">
          {["services", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`capitalize transition-colors duration-200
                ${
                  active === link
                    ? "text-emerald-400"
                    : "text-white/80 hover:text-emerald-300"
                }
              `}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
              ${menuOpen ? "rotate-45" : "-translate-y-2"}
            `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
              ${menuOpen ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
              ${menuOpen ? "-rotate-45" : "translate-y-2"}
            `}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col items-center gap-4
                        bg-green-900/95 backdrop-blur px-6 py-6">
          {["services", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`capitalize text-lg font-medium
                ${
                  active === link
                    ? "text-emerald-400"
                    : "text-white/80 hover:text-emerald-300"
                }
              `}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
