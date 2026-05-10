import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { useLang } from "@/lib/i18n";


export function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <section id="education" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{e.label}</p>
          <h2 className="text-4xl font-bold font-heading">{e.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Degrees */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{e.academicLabel}</h3>
            </div>
            <div className="space-y-6">
              {e.degrees.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-6 border-l border-border/60"
                >
                  <div className="absolute w-2.5 h-2.5 bg-background border-2 border-primary rounded-full -left-[5px] top-2" />
                  <h4 className="font-semibold text-foreground leading-snug">{edu.degree}</h4>
                  <p className="text-sm text-primary font-medium mt-0.5">{edu.school}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {edu.date}
                  </p>
                  {edu.detail && (
                    <p className="mt-2 text-xs text-foreground/70 bg-background/60 border border-border/50 rounded-lg p-3 leading-relaxed">
                      <BookOpen className="inline w-3 h-3 mr-1.5 text-primary" />
                      {edu.detail}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{e.certsLabel}</h3>
            </div>
            <div className="grid gap-2.5">
              {e.certs.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="bg-background border border-border/60 rounded-xl px-4 py-3 flex items-start justify-between gap-3 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">{cert.issuer}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
