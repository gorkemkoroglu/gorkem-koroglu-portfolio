import { motion } from "framer-motion";
import { Activity, Database, Layout, Search, Users, Globe, Star, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [
  <Search className="w-5 h-5" />,
  <Database className="w-5 h-5" />,
  <Activity className="w-5 h-5" />,
  <Globe className="w-5 h-5" />,
  <Layout className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Star className="w-5 h-5" />,
];

export function Skills() {
  const { t, lang } = useLang();
  const s = t.skills;
  const swipeHint = lang === "tr" ? "Kaydırın" : "Swipe";

  return (
    <section id="skills" className="py-16 md:py-24 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{s.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
          <div className="md:hidden flex items-center gap-1.5 mt-4 text-[11px] font-mono uppercase tracking-widest text-primary/70">
            <span>{swipeHint}</span>
            <ArrowRight className="w-3 h-3 animate-pulse" />
            <span className="ml-1 text-muted-foreground/60 normal-case tracking-normal">{s.categories.length}</span>
          </div>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
          {s.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-background border border-border/60 rounded-2xl p-5 md:p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(0,200,200,0.06)] transition-all duration-300 group w-[78%] sm:w-[55%] md:w-auto shrink-0 md:shrink snap-start"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                  {icons[idx]}
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base leading-snug">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-card border border-border/50 text-[13px] md:text-xs text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-default"
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
