import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const areaIcons = ["01", "02", "03", "04", "05", "06"];

export function WorkHighlights() {
  const { t } = useLang();
  const h = t.highlights;

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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {h.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group bg-background border border-border/60 rounded-2xl p-5 md:p-6 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(0,200,200,0.05)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold font-mono text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {areaIcons[idx]}
                </div>
                <h3 className="font-semibold text-foreground text-[15px] md:text-sm leading-snug">{item.title}</h3>
              </div>
              <p className="text-[15px] md:text-sm text-foreground/70 md:text-foreground/65 leading-[1.65]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
