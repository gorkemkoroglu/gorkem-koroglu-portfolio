import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function FloatingActions() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2"
        >
          <button
            type="button"
            onClick={goContact}
            aria-label={lang === "tr" ? "İletişime geç" : "Get in touch"}
            className="group h-12 w-12 md:h-auto md:w-auto md:px-5 md:py-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span className="hidden md:inline text-sm font-semibold">
              {lang === "tr" ? "İletişim" : "Contact"}
            </span>
          </button>
          <button
            type="button"
            onClick={goTop}
            aria-label={lang === "tr" ? "Yukarı çık" : "Back to top"}
            className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-card border border-border text-foreground/80 shadow-lg hover:border-primary/50 hover:text-primary hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
