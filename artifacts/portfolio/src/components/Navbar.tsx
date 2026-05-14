import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

const SECTION_IDS = ["about", "experience", "skills", "highlights", "showcase", "cases", "education", "beyondcv", "contact"];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#experience", id: "experience", label: t.nav.experience },
    { href: "#skills", id: "skills", label: t.nav.skills },
    { href: "#highlights", id: "highlights", label: t.nav.highlights },
    { href: "#showcase", id: "showcase", label: t.nav.showcase },
    { href: "#cases", id: "cases", label: t.nav.cases },
    { href: "#education", id: "education", label: t.nav.education },
    { href: "#beyondcv", id: "beyondcv", label: t.nav.beyondcv },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    // Defer scroll until after the menu close animation has started, so the
    // close + scroll don't fight on slow mobile devices and the next tap
    // (e.g. re-opening the menu) registers cleanly.
    requestAnimationFrame(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  // Lock body scroll while mobile menu is open so background scroll doesn't
  // intercept taps that should be hitting the menu / hamburger.
  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <div
          className="font-heading font-bold text-xl tracking-tight cursor-pointer text-primary shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          GK.
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className={`relative text-xs font-medium transition-colors px-3 py-1.5 rounded-md group ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-1 bg-card border border-border/60 rounded-full p-1" role="group" aria-label={lang === "tr" ? "Dil seçimi" : "Language selection"}>
          <button
            onClick={() => setLang("tr")}
            aria-pressed={lang === "tr"}
            aria-label="Türkçe"
            className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
              lang === "tr"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            TR
          </button>
          <button
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            aria-label="English"
            className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
              lang === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile toggle — 44x44 tap target (Apple/Google guideline) + touch-action
            for instant tap response on iOS Safari. */}
        <button
          type="button"
          className="lg:hidden text-foreground inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md hover:bg-card/60 active:bg-card/80 transition-colors"
          style={{ touchAction: "manipulation" }}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? (lang === "tr" ? "Menüyü kapat" : "Close menu") : (lang === "tr" ? "Menüyü aç" : "Open menu")}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop — taps outside the menu close it */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden fixed inset-0 top-16 bg-background/40 backdrop-blur-[2px] z-[-1]"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/60 shadow-lg"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 mt-2 border-t border-border/50">
                <span className="text-xs text-muted-foreground">{lang === "tr" ? "Dil:" : "Language:"}</span>
                <div className="flex items-center gap-1 bg-card border border-border/60 rounded-full p-0.5" role="group" aria-label={lang === "tr" ? "Dil seçimi" : "Language selection"}>
                  <button
                    onClick={() => setLang("tr")}
                    aria-pressed={lang === "tr"}
                    aria-label="Türkçe"
                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                      lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    aria-pressed={lang === "en"}
                    aria-label="English"
                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                      lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
