import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <section id="education" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              {e.heading}
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {e.degrees.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-6 border-l border-border"
              >
                <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[6.5px] top-1.5"></div>
                <h3 className="font-bold text-lg text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.date}</p>
                {edu.detail && (
                  <p className="text-sm text-foreground/80 bg-background/50 p-3 rounded-md border border-border/50">
                    <BookOpen className="inline-block w-4 h-4 mr-2 text-primary" />
                    {edu.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              {e.certHeading}
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid gap-3">
            {e.certs.map((cert, idx) => {
              const [title, issuer] = cert.split(" — ");
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-background border border-border p-4 rounded-xl flex flex-col justify-center hover:border-primary/50 transition-colors group"
                >
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </p>
                  {issuer && <p className="text-xs text-muted-foreground mt-1">{issuer}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
