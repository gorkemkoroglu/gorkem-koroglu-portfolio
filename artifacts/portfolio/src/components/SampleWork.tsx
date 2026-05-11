import { motion } from "framer-motion";
import { Search, Layers, GitBranch, CheckSquare } from "lucide-react";
import { useLang } from "@/lib/i18n";

const practiceIcons = [Search, Layers, GitBranch, CheckSquare];

export function SampleWork() {
  const { t } = useLang();
  const s = t.showcase as any;

  return (
    <section id="showcase" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{s.label}</p>
          <h2 className="text-4xl font-bold font-heading mb-3">{s.heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-5" />
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{s.subtitle}</p>
        </motion.div>

        {/* ── Block 1: How I approach a problem ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">{s.principlesHeading}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(s.principles as any[]).map((p: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-background border border-border/60 rounded-xl p-5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,200,200,0.05)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="font-mono text-[11px] text-primary/60 mt-0.5 shrink-0 leading-none pt-px">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/40 mb-16" />

        {/* ── Block 2: How this shows up in practice ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">{s.practiceHeading}</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {(s.practices as any[]).map((p: any, idx: number) => {
              const Icon = practiceIcons[idx] ?? Search;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="bg-background border border-border/60 rounded-xl p-6 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(0,200,200,0.06)] transition-all duration-300 group"
                >
                  {/* Practice header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{p.title}</h4>
                  </div>

                  {/* Intro */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.intro}</p>

                  {/* Points */}
                  <ul className="space-y-2 mb-4">
                    {(p.points as string[]).map((pt: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/40">
                    {(p.tags as string[]).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-primary/20 bg-primary/5 rounded-xl px-6 py-5 flex items-start gap-4"
        >
          <div className="w-0.5 self-stretch bg-primary/50 rounded-full shrink-0" />
          <p className="text-sm text-foreground/80 leading-relaxed italic">{s.closing}</p>
        </motion.div>

      </div>
    </section>
  );
}
