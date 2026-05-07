import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Experience() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Career</p>
          <h2 className="text-4xl font-bold font-heading">{e.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {e.jobs.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border/60 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  {exp.companyNote && (
                    <p className="text-sm text-muted-foreground">{exp.companyNote}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground shrink-0">
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
                </div>
              </div>

              <p className="text-sm text-foreground/70 mb-5 italic border-l-2 border-primary/40 pl-3">{exp.summary}</p>

              <ul className="space-y-2 mb-6">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
