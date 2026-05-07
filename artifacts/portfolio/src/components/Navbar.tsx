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
    { href: "#highlights", label: t.nav.highlights },
    { href: "#showcase", label: t.nav.showcase },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
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
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-card/60"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-1 bg-card border border-border/60 rounded-full p-1">
          <button
            onClick={() => setLang("tr")}
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
            className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
              lang === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/60 shadow-lg"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors px-3 py-2 rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 mt-2 border-t border-border/50">
                <span className="text-xs text-muted-foreground">Language:</span>
                <div className="flex items-center gap-1 bg-card border border-border/60 rounded-full p-0.5">
                  <button
                    onClick={() => setLang("tr")}
                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                      lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => setLang("en")}
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
        )}
      </AnimatePresence>
    </nav>
  );
}
