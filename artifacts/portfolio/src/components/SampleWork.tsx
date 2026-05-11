import { motion } from "framer-motion";
import { Search, GitBranch, Layout, Layers } from "lucide-react";
import { useLang } from "@/lib/i18n";

const caseIcons = [Search, GitBranch, Layout, Layers];

const approachLabel: Record<string, string> = {
  en: "Analysis Approach",
  tr: "Analiz Yaklaşımı",
};

const findingLabel: Record<string, string> = {
  en: "Key Finding",
  tr: "Kritik Tespit",
};

const outcomeLabel: Record<string, string> = {
  en: "Outcome",
  tr: "Sonuç",
};

export function SampleWork() {
  const { t, lang } = useLang();
  const s = t.showcase;
  const cases = s.cases as any[];

  return (
    <section id="showcase" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
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
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{s.subheading}</p>
        </motion.div>

        <div className="space-y-6">
          {cases.map((c: any, idx: number) => {
            const Icon = caseIcons[idx] ?? Search;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-border/60 rounded-2xl overflow-hidden bg-background"
              >
                {/* Card Header */}
                <div className="border-b border-border/60 bg-card/40 px-6 py-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/50 shrink-0">{c.id}</span>
                  <h3 className="font-semibold text-foreground text-sm flex-1 min-w-0 truncate">{c.title}</h3>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {c.type}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Context */}
                  <p className="text-xs font-mono text-muted-foreground/60 tracking-wide">{c.context}</p>

                  {/* Problem + Approach — 2-col grid */}
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                    {/* Problem */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-2">Problem</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{c.problem}</p>
                    </div>

                    {/* Approach */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-2">
                        {approachLabel[lang] ?? approachLabel.en}
                      </p>
                      <ol className="space-y-2">
                        {(c.approach as string[]).map((step: string, i: number) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                            <span className="font-mono text-primary/70 text-xs mt-0.5 shrink-0">
                              {String(i + 1).padStart(2, "0")}.
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Key Finding */}
                  <div className="flex items-start gap-4 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
                    <div className="w-0.5 self-stretch bg-primary/60 rounded-full shrink-0" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/80 mb-1.5">
                        {findingLabel[lang] ?? findingLabel.en}
                      </p>
                      <p className="text-sm text-foreground/85 leading-relaxed">{c.finding}</p>
                    </div>
                  </div>

                  {/* Outcome + Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 pt-1">
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                        {outcomeLabel[lang] ?? outcomeLabel.en}
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{c.outcome}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:justify-end shrink-0 sm:max-w-[240px]">
                      {(c.tags as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
