import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

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
        ${scrolled
          ? "bg-green-900/80 backdrop-blur shadow-lg"
          : "bg-transparent"}
      `}
    >
      <div className="container flex items-center justify-between py-4">
        
        {/* LOGO */}
        <a
          href="#home"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="text-xl font-semibold cursor-pointer
                     bg-gradient-to-r from-emerald-600 to-lime-300
                     bg-clip-text text-transparent"
        >
          GoFarm
        </a>

        {/* NAV LINKS */}
        <nav className="flex gap-6">
          {["services", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`capitalize transition-colors duration-200
                ${
                  active === link
                    ? "text-emerald-400"
                    : "text-white/80 hover:text-emerald-300"
                }
              `}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
