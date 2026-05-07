import { motion } from "framer-motion";
import { FolderOpen, Wrench, Lightbulb, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{p.label}</p>
          <h2 className="text-4xl font-bold font-heading">{p.heading}</h2>
          <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {p.items.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_32px_rgba(0,200,200,0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/60 mt-2">{project.id}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-xs font-mono text-primary mb-3">{project.domain}</p>
              <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{project.summary}</p>

              {/* Role + Contribution */}
              <div className="space-y-3 mb-5">
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/80">Role: </span>
                  {project.role}
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed border-l-2 border-primary/30 pl-3">
                  {project.contribution}
                </p>
              </div>

              {/* Highlight */}
              <div className="bg-primary/5 border border-primary/15 rounded-lg p-3 mb-5">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/80 leading-relaxed">{project.highlight}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <Wrench className="w-3 h-3 text-muted-foreground/50 shrink-0" />
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs text-muted-foreground">
                    {tool}
                  </span>
                )).reduce((acc, el, i) => (
                  i === 0 ? [el] : [...acc, <span key={`sep-${i}`} className="text-muted-foreground/30 text-xs">·</span>, el]
                ), [] as React.ReactNode[])}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
