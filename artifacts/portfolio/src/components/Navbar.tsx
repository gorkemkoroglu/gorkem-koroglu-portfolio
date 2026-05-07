import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#showcase", label: t.nav.showcase },
    { href: "#education", label: t.nav.education },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="font-heading font-bold text-xl tracking-tight cursor-pointer text-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          GK.
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`nav-${item.href.slice(1)}`}
            >
              {item.label}
            </button>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-card border border-border rounded-full p-0.5 ml-2">
            <button
              onClick={() => setLang("tr")}
              data-testid="lang-tr"
              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "tr"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang("en")}
              data-testid="lang-en"
              className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-2 pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">Lang:</span>
                <div className="flex items-center gap-1 bg-card border border-border rounded-full p-0.5">
                  <button
                    onClick={() => setLang("tr")}
                    className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                      lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${
                      lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
