import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function Experience() {
  const { t, lang } = useLang();
  const e = t.experience;
  // Most recent role open by default so the section is never visually empty.
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{e.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
          <p className="mt-4 text-xs md:text-sm text-muted-foreground/80">
            {lang === "tr" ? "Detayları görmek için bir pozisyona tıklayın" : "Click a role to expand the details"}
          </p>
        </motion.div>

        <div className="space-y-3">
          {e.jobs.map((exp, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`bg-card border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 shadow-[0_0_28px_rgba(0,200,200,0.06)]"
                    : "border-border/60 hover:border-primary/30"
                }`}
              >
                {/* Header — always clickable */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : index)}
                  className="w-full text-left p-5 md:p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6"
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${index}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-semibold text-sm md:text-base">{exp.company}</p>
                    {exp.companyNote && (
                      <p className="text-xs md:text-sm text-muted-foreground">{exp.companyNote}</p>
                    )}
                  </div>
                  <div className="flex flex-row md:flex-col gap-3 md:gap-1 text-xs md:text-sm text-muted-foreground shrink-0 flex-wrap items-center md:items-end">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.date}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-5 h-5 text-primary/70 ml-auto md:ml-0 md:mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Body — accordion on all viewports */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`exp-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <div className="border-t border-border/40 pt-5">
                          {/* max-w-3xl keeps line length at ~70-80 characters
                              for comfortable reading on wide screens. */}
                          <div className="max-w-3xl">
                            <p className="text-[15px] md:text-[15px] text-foreground/75 mb-5 italic border-l-2 border-primary/40 pl-3 leading-[1.7]">
                              {exp.summary}
                            </p>
                            <ul className="space-y-3 mb-5">
                              {exp.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[15px] md:text-[14.5px] text-foreground/85 leading-[1.7]">
                                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                                  <span className="flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md text-[11px] md:text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
