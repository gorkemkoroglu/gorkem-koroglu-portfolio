import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cases } from "@/lib/cases";

export function AnalysisCases() {
  const { lang } = useLang();
  const [, navigate] = useLocation();

  const heading = lang === "tr" ? "Analiz Vakaları" : "Analysis Cases";
  const label = lang === "tr" ? "Portfolyo çalışmaları" : "Portfolio work";
  const subtitle =
    lang === "tr"
      ? "Belirsizliği yapılandırma, sistem davranışını doğrulama ve teknik bulguları aksiyon alınabilir analiz çıktısına dönüştürme biçimimi gösteren seçili vaka çalışmaları."
      : "Selected case studies that show how I structure ambiguity, validate system behavior, and turn technical findings into actionable analysis outputs.";
  const viewCase = lang === "tr" ? "Vakayı İncele" : "View Case";

  return (
    <section id="cases" className="py-24 border-y border-border/50">
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
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{subtitle}</p>
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-background border border-border/60 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-[0_0_28px_rgba(0,200,200,0.07)] transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/cases/${c.id}`)}
              >
                {/* Case number */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                    {lang === "tr" ? "Vaka" : "Case"} — {String(c.number).padStart(2, "0")}
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/8 text-primary/70 border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border/40">
                  <button
                    className="flex items-center gap-2 text-xs font-medium text-primary group-hover:gap-3 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/cases/${c.id}`);
                    }}
                  >
                    {viewCase}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
