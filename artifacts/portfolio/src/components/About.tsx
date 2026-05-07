import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
              <Terminal className="text-primary" />
              {a.heading}
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed">{a.bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
