import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{a.label}</p>
          <h2 className="text-4xl font-bold font-heading">{a.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: intro + bullets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-medium text-foreground leading-relaxed mb-4">{a.intro}</p>
            <p className="text-base text-foreground/70 leading-relaxed mb-8">{a.description}</p>

            <ul className="space-y-3">
              {a.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: how I work */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{a.howIWork.heading}</span>
            </div>
            <div className="grid gap-4">
              {a.howIWork.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border/60 rounded-xl p-5 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary font-bold font-mono text-sm group-hover:bg-primary/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
