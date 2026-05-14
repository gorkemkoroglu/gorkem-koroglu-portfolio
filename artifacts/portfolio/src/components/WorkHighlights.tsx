import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SpotlightCard } from "./SpotlightCard";

const areaIcons = ["01", "02", "03", "04", "05", "06"];

export function WorkHighlights() {
  const { t, lang } = useLang();
  const h = t.highlights;
  const swipeHint = lang === "tr" ? "Kaydırın" : "Swipe";

  return (
    <section id="highlights" className="py-16 md:py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{h.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-5 md:mb-6">{h.heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-5 md:mb-6" />
          <p className="text-foreground/70 max-w-3xl leading-relaxed text-sm md:text-base">{h.intro}</p>
          <div className="md:hidden flex items-center gap-1.5 mt-4 text-[11px] font-mono uppercase tracking-widest text-primary/70">
            <span>{swipeHint}</span>
            <ArrowRight className="w-3 h-3 animate-pulse" />
            <span className="ml-1 text-muted-foreground/60 normal-case tracking-normal">{h.items.length}</span>
          </div>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
          {h.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] md:w-auto shrink-0 md:shrink snap-center"
            >
              <SpotlightCard className="group h-full bg-background border border-border/60 rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold font-mono text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                      {areaIcons[idx]}
                    </div>
                    <h3 className="font-semibold text-foreground text-[15px] md:text-sm leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-[15px] md:text-sm text-foreground/80 md:text-foreground/75 leading-[1.7]">{item.text}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
