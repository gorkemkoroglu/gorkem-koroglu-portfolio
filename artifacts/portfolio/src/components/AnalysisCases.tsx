import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, Search, Layers, CheckSquare, Tag } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cases } from "@/lib/cases";

export function AnalysisCases() {
  const { lang } = useLang();
  const [, navigate] = useLocation();

  const heading = lang === "tr" ? "Analiz Vakaları" : "Analysis Cases";
  const label = lang === "tr" ? "Portfolyo çalışmaları" : "Portfolio work";
  const intro =
    lang === "tr"
      ? "Sıradan bir vitrin değil — gerçek analist çıktısı. Bu vakalar; problem tanımı, kapsam, iş kuralları, akış modeli, test ve UAT çerçevesiyle tam bir analiz portföyü sunuyor."
      : "Not a generic showcase — real analyst output. These cases present a complete analysis portfolio: problem definition, scope, business rules, flow model, test design, and UAT framework.";
  const viewCase = lang === "tr" ? "Vakayı İncele" : "View Case";

  return (
    <section id="cases" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{label}</p>
          <h2 className="text-4xl font-bold font-heading mb-3">{heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-5" />
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cases.map((c, idx) => {
            const content = lang === "tr" ? c.tr : c.en;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-background border border-border/60 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-[0_0_28px_rgba(0,200,200,0.07)] transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/cases/${c.id}`)}
              >
                {/* Case header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Search className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                    {lang === "tr" ? "Analiz Vakası" : "Analysis Case"} — {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {content.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
                  {content.summary}
                </p>

                {/* Mini feature icons */}
                <div className="flex items-center gap-3 mb-5 text-muted-foreground/60">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Layers className="w-3 h-3" />
                    {lang === "tr" ? "4 Katman" : "4 Layers"}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <CheckSquare className="w-3 h-3" />
                    {lang === "tr" ? "7 Test" : "7 Tests"}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Tag className="w-3 h-3" />
                    {lang === "tr" ? "6 İş Kuralı" : "6 Rules"}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {content.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/cases/${c.id}`);
                  }}
                >
                  {viewCase}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}

          {/* Coming soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card/30 border border-dashed border-border/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[280px]"
          >
            <p className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest mb-2">
              {lang === "tr" ? "Yakında" : "Coming soon"}
            </p>
            <p className="text-sm text-muted-foreground/40">
              {lang === "tr" ? "Yeni vaka ekleniyor" : "New case in progress"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
