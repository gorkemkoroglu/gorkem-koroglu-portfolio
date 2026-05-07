import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
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
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
            <Briefcase className="text-primary" />
            {e.heading}
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12">
          {e.jobs.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary -left-[9px] top-1.5"></div>

              <div className="bg-card border border-border rounded-xl p-6 hover-elevate transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {exp.date}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 mt-1">{exp.location}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
