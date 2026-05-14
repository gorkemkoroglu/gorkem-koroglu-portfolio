import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function Experience() {
  const { t } = useLang();
  const e = t.experience;
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{e.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-3 md:space-y-6">
          {e.jobs.map((exp, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border/60 rounded-2xl p-5 md:p-8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Header — clickable on mobile to toggle */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : index)}
                  className="md:cursor-default w-full text-left flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 md:mb-5"
                  aria-expanded={isOpen}
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
                      className={`md:hidden w-5 h-5 text-primary/70 ml-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Body — accordion on mobile, always visible on desktop */}
                <div className="hidden md:block">
                  <p className="text-sm text-foreground/70 mb-5 italic border-l-2 border-primary/40 pl-3 leading-[1.65]">{exp.summary}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-[1.65]">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="md:hidden overflow-hidden"
                    >
                      <div className="pt-4">
                        <p className="text-[15px] text-foreground/70 mb-4 italic border-l-2 border-primary/40 pl-3 leading-[1.65]">{exp.summary}</p>
                        <ul className="space-y-3 mb-5">
                          {exp.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/80 leading-[1.65]">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded-md text-[11px] font-medium bg-primary/10 text-primary border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
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
