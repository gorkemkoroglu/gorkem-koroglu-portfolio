import { motion } from "framer-motion";
import { Activity, Database, Layout, Search, Users, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [
  <Search className="w-5 h-5" />,
  <Database className="w-5 h-5" />,
  <Activity className="w-5 h-5" />,
  <Globe className="w-5 h-5" />,
  <Layout className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
];

export function Skills() {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{s.label}</p>
          <h2 className="text-4xl font-bold font-heading">{s.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-background border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(0,200,200,0.06)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {icons[idx]}
                </div>
                <h3 className="font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-card border border-border/50 text-xs text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-default"
                  >
                    {skill}
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
