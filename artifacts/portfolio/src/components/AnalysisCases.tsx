import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cases } from "@/lib/cases";
import { SpotlightCard } from "./SpotlightCard";

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
    <section id="cases" className="py-16 md:py-24 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{label}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">{heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-4 md:mb-5" />
          <p className="text-muted-foreground max-w-2xl text-[15px] md:text-sm leading-[1.65]">{subtitle}</p>
          <div className="md:hidden flex items-center gap-1.5 mt-4 text-[11px] font-mono uppercase tracking-widest text-primary/70">
            <span>{lang === "tr" ? "Kaydırın" : "Swipe"}</span>
            <ArrowRight className="w-3 h-3 animate-pulse" />
            <span className="ml-1 text-muted-foreground/60 normal-case tracking-normal">{cases.length}</span>
          </div>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
          {cases.map((c, idx) => {
            const content = lang === "tr" ? c.tr : c.en;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] md:w-auto shrink-0 md:shrink snap-center"
              >
                <SpotlightCard
                  size={380}
                  color="rgba(0, 210, 200, 0.12)"
                  onClick={() => navigate(`/cases/${c.id}`)}
                  role="link"
                  tabIndex={0}
                  ariaLabel={`${lang === "tr" ? "Vakayı incele" : "View case"}: ${content.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigate(`/cases/${c.id}`);
                    }
                  }}
                  className="group h-full bg-background border border-border/60 rounded-2xl p-5 md:p-6 flex flex-col hover:border-primary/40 transition-colors duration-300 cursor-pointer overflow-hidden focus:outline-none"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Case number */}
                    <div className="flex items-center gap-2 mb-4 md:mb-5">
                      <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                        {lang === "tr" ? "Vaka" : "Case"} — {String(c.number).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] md:text-sm font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {content.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[13.5px] md:text-xs text-muted-foreground/90 md:text-muted-foreground leading-[1.65] mb-5 flex-1">
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
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
