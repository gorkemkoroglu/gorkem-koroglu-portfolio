import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "MSc, Management Information Systems and Engineering",
    school: "Marmara University",
    date: "Feb 2023 – Jun 2024",
    detail: 'Semester project: "The Role of Data Analytics in Insurance Sector Digital Transformation"',
  },
  {
    degree: "Exchange Student, Computer Science",
    school: "University of Lodz, Poland",
    date: "2021 – 2022",
    detail: "",
  },
  {
    degree: "BSc, Management Information Systems",
    school: "Bilecik Şeyh Edebali University",
    date: "2018 – 2022",
    detail: "",
  },
  {
    degree: "Associate's, Web Design & Coding",
    school: "Anadolu University",
    date: "2019 – 2021",
    detail: "",
  },
];

const certifications = [
  "Generative AI for Business Analysts — LinkedIn Learning",
  "The Non-Technical Skills of Effective Data Scientists — LinkedIn Learning",
  "Introduction to Business Analytics — 365 Data Science",
  "Data Science & ML Bootcamp — Veri Bilimi Okulu",
  "Advanced SQL for Data Scientists — LinkedIn Learning",
  "Foundations of Algorithmic Thinking with Python — LinkedIn Learning",
  "Software Development Life Cycle (SDLC) — LinkedIn Learning",
  "Hands-On Data Science: Sales Dashboard with Tableau — LinkedIn Learning",
  "Storytelling with Data — (certification)",
  "Introduction to SAP BI/BW — LinkedIn Learning",
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
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

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid gap-3">
            {certifications.map((cert, idx) => {
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
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{title}</p>
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
