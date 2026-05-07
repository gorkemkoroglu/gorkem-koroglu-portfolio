import { motion } from "framer-motion";
import {
  AlertCircle, ArrowRight, CheckCircle2, Server, Clock,
  ShieldCheck, TrendingDown, Layers, FileSearch, Zap, BarChart3, Layout, GitBranch,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const caseIcons = [
  <AlertCircle className="w-4 h-4" />,
  <GitBranch className="w-4 h-4" />,
  <BarChart3 className="w-4 h-4" />,
  <Layout className="w-4 h-4" />,
  <FileSearch className="w-4 h-4" />,
];

const statusColors: Record<string, string> = {
  fail: "text-destructive bg-destructive/10 border-destructive/30",
  warn: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  pass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
};

const metricColors: Record<string, string> = {
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  primary: "text-primary",
  cyan: "text-cyan-400",
};

export function SampleWork() {
  const { t } = useLang();
  const s = t.showcase;
  const cases = s.cases as any[];

  return (
    <section id="showcase" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{s.label}</p>
          <h2 className="text-4xl font-bold font-heading mb-3">{s.heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-5" />
          <p className="text-muted-foreground max-w-2xl text-sm">{s.subheading}</p>
        </motion.div>

        <div className="space-y-8">
          {cases.map((c: any, idx: number) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-border/60 rounded-2xl overflow-hidden bg-card"
            >
              {/* Card Header */}
              <div className="border-b border-border/60 bg-muted/20 px-6 py-4 flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {caseIcons[idx]}
                </div>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="font-mono text-xs text-muted-foreground/60 shrink-0">{c.id}</span>
                  <h3 className="font-semibold text-foreground text-sm truncate">{c.title}</h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  {c.type}
                </span>
              </div>

              {/* Case 1: Root Cause */}
              {idx === 0 && (
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <AlertCircle className="w-4 h-4 text-destructive" />
                      Problem
                    </h4>
                    <p className="text-sm text-foreground/75 mb-6 bg-background/60 p-4 rounded-xl border border-border/50 leading-relaxed">
                      {c.problem}
                    </p>
                    <h4 className="text-sm font-semibold mb-3">Root Cause Tree</h4>
                    <pre className="text-xs font-mono text-muted-foreground bg-background/60 p-4 rounded-xl border border-border/50 leading-loose overflow-x-auto">
{`└─ Transaction Failure (142 TXN)
  └─ API Timeout at Validation Node
    └─ Invalid XML Payload
      └─ Missing <BeneficiaryIBAN>
        └─ ROOT: Mapping update dropped field`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Resolution
                    </h4>
                    <div className="space-y-4 relative border-l border-border/50 ml-3">
                      {c.resolution.map((r: any, i: number) => (
                        <div key={i} className="relative pl-6">
                          <div className={`absolute w-2.5 h-2.5 rounded-full -left-[5px] top-1.5 ${i === 0 ? "bg-emerald-400" : "bg-primary"}`} />
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-mono text-muted-foreground/60">{r.step}</span>
                            <span className="text-sm font-semibold">{r.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                      <p className="text-xs text-foreground/70 flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {c.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Case 2: Process Flow */}
              {idx === 1 && (
                <div className="p-6 md:p-8">
                  <p className="text-sm text-foreground/70 mb-6 max-w-xl leading-relaxed">{c.problem}</p>
                  <div className="overflow-x-auto pb-2">
                    <div className="min-w-[700px] flex items-center gap-2 mb-6">
                      {c.nodes.map((node: any, i: number, arr: any[]) => (
                        <div key={i} className="flex items-center">
                          <div
                            className={`rounded-xl p-4 border-2 w-28 text-center relative transition-all ${
                              node.highlight
                                ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,200,200,0.15)]"
                                : "border-border/60 bg-background/60"
                            }`}
                          >
                            <p className="text-xs font-bold text-foreground mb-1 leading-tight">{node.step}</p>
                            <p className="text-[10px] text-muted-foreground leading-tight">{node.desc}</p>
                            {node.highlight && (
                              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[10px] font-bold">!</div>
                            )}
                          </div>
                          {i < arr.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-muted-foreground/40 mx-1 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/15 rounded-xl">
                    <p className="text-sm text-foreground/80">
                      <strong className="text-primary">{c.insight.split(".")[0]}.</strong>{" "}
                      {c.insight.split(".").slice(1).join(".")}
                    </p>
                  </div>
                </div>
              )}

              {/* Case 3: KPI Dashboard */}
              {idx === 2 && (
                <div className="p-6 md:p-8">
                  <p className="text-sm text-foreground/70 mb-6 max-w-xl leading-relaxed">{c.problem}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {c.metrics.map((metric: any, i: number) => {
                      const icons = [
                        <Server className="w-5 h-5" />,
                        <Clock className="w-5 h-5" />,
                        <ShieldCheck className="w-5 h-5" />,
                        <CheckCircle2 className="w-5 h-5" />,
                      ];
                      return (
                        <div key={i} className="bg-background/60 border border-border/50 rounded-xl p-5 flex flex-col items-center text-center">
                          <div className={`mb-2 ${metricColors[metric.color]}`}>{icons[i]}</div>
                          <span className="text-2xl font-bold font-mono text-foreground">{metric.value}</span>
                          <span className="text-xs text-muted-foreground mt-1 leading-tight">{metric.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-background/60 border border-border/50 rounded-xl p-5">
                    <div className="flex justify-between items-center mb-5">
                      <h4 className="text-sm font-semibold">{c.trend.label}</h4>
                      <div className="flex items-center text-emerald-400 text-sm font-medium gap-1">
                        <TrendingDown className="w-4 h-4" />
                        {c.trend.value}
                      </div>
                    </div>
                    <div className="flex items-end gap-4 h-28">
                      {[{ label: "Jul", val: 80 }, { label: "Aug", val: 65 }, { label: "Sep", val: 45 }].map((bar) => (
                        <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group">
                          <div className="w-full bg-primary/15 rounded-t-md overflow-hidden h-full flex items-end relative">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${bar.val}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="w-full bg-primary rounded-t-md"
                            />
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl">
                    <p className="text-xs text-foreground/70 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      {c.insight}
                    </p>
                  </div>
                </div>
              )}

              {/* Case 4: Requirement to Screen */}
              {idx === 3 && (
                <div className="p-6 md:p-8">
                  <p className="text-sm text-foreground/70 mb-6 max-w-xl leading-relaxed">{c.problem}</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Approach</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">{c.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Process</h4>
                      <div className="space-y-3">
                        {c.steps.map((step: any, i: number) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold font-mono text-primary shrink-0">
                              {i + 1}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-foreground">{step.phase}</p>
                              <p className="text-xs text-muted-foreground">{step.action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <p className="text-xs text-foreground/70 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {c.outcome}
                    </p>
                  </div>
                </div>
              )}

              {/* Case 5: API Delta */}
              {idx === 4 && (
                <div className="p-6 md:p-8">
                  <p className="text-sm text-foreground/70 mb-6 max-w-xl leading-relaxed">{c.problem}</p>
                  <div className="rounded-xl border border-border/50 overflow-hidden mb-6">
                    <div className="grid grid-cols-4 bg-muted/30 px-4 py-2.5 text-xs font-mono text-muted-foreground font-semibold">
                      <span>Field</span>
                      <span>Expected</span>
                      <span>Actual</span>
                      <span>Status</span>
                    </div>
                    {c.delta.map((row: any, i: number) => (
                      <div
                        key={i}
                        className="grid grid-cols-4 px-4 py-3 border-t border-border/40 text-xs gap-2 hover:bg-card/50 transition-colors"
                      >
                        <span className="font-mono text-primary">{row.field}</span>
                        <span className="text-foreground/70">{row.expected}</span>
                        <span className="text-foreground/70">{row.actual}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase self-start ${statusColors[row.status]}`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-primary/5 border border-primary/15 rounded-xl">
                    <p className="text-xs text-foreground/70 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {c.outcome}
                    </p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="px-6 pb-5 flex flex-wrap gap-2">
                {c.tags.map((tag: string) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border/50 text-muted-foreground">
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
