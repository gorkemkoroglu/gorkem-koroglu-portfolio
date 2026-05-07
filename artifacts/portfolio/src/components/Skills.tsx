import { motion } from "framer-motion";
import { Activity, Database, Layout, Search, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: <Search className="w-5 h-5" />,
    skills: ["SQL", "Python (pandas, numpy)", "Microsoft Excel"],
  },
  {
    title: "Visualization",
    icon: <Activity className="w-5 h-5" />,
    skills: ["Power BI", "Tableau", "matplotlib", "seaborn"],
  },
  {
    title: "Testing & DB",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "PL/SQL", "SQL Server", "SOAP UI", "Postman"],
  },
  {
    title: "Project Tools",
    icon: <Layout className="w-5 h-5" />,
    skills: ["Jira", "Confluence", "MS Visio", "Figma"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: ["Analytical Thinking", "Stakeholder Management", "Communication", "Adaptability"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
            <Activity className="text-primary" />
            Skills Matrix
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                {category.icon}
                <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-sm border border-border/50"
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
