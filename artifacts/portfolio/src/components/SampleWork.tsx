import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Server, Clock, ShieldCheck, TrendingDown, Layers } from "lucide-react";

export function SampleWork() {
  return (
    <section id="showcase" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
            <Layers className="text-primary" />
            Analyst Showcase
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl">
            A demonstration of structural thinking, process mapping, and performance analytics.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Artifact 1: Root Cause Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-2xl overflow-hidden bg-card shadow-lg"
          >
            <div className="border-b border-border bg-muted/30 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wider">DOC-RCA-4091 :: Payment Failure Investigation</h3>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-foreground">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  Problem Statement
                </h4>
                <p className="text-sm text-foreground/80 mb-6 bg-background p-4 rounded-md border border-border">
                  On Oct 12, 2023, 142 cross-border transactions failed during routing to European correspondent banks, resulting in a 4-hour delay and manual reconciliation overhead.
                </p>
                
                <h4 className="text-lg font-bold mb-3">Root Cause Tree</h4>
                <ul className="text-sm space-y-2 font-mono text-muted-foreground bg-background p-4 rounded-md border border-border">
                  <li>└─ Transaction Failure (142 count)</li>
                  <li>&nbsp;&nbsp;└─ API Timeout at Validation Node</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;└─ Invalid XML Payload Structure</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Missing `<span className="text-primary">BeneficiaryIBAN</span>` tag</li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ <strong className="text-destructive">Root:</strong> Core mapping update dropped field.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Resolution & Action
                </h4>
                <div className="relative border-l border-border ml-3 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6px] top-1"></div>
                    <p className="text-sm font-bold">Immediate Fix</p>
                    <p className="text-xs text-muted-foreground">Rolled back mapping config; reprocessed failed queue manually.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6px] top-1"></div>
                    <p className="text-sm font-bold">Preventive Action</p>
                    <p className="text-xs text-muted-foreground">Added XSD schema validation pre-flight check in integration layer.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6px] top-1"></div>
                    <p className="text-sm font-bold">Process Update</p>
                    <p className="text-xs text-muted-foreground">Mandatory UAT regression for all XML templates on core updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Artifact 2: Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-2xl overflow-hidden bg-card shadow-lg"
          >
            <div className="border-b border-border bg-muted/30 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wider">FLOW-882 :: International Wire Transfer</h3>
            </div>
            <div className="p-6 md:p-8 overflow-x-auto">
              <div className="min-w-[800px] flex items-center justify-between gap-2 py-8">
                {[
                  { step: "Initiation", desc: "User inputs details" },
                  { step: "Validation", desc: "Format & limits" },
                  { step: "Compliance", desc: "AML/KYC check", highlight: true },
                  { step: "Routing", desc: "Correspondent selection" },
                  { step: "Settlement", desc: "Ledger update" },
                  { step: "Notification", desc: "User alert" },
                ].map((node, i, arr) => (
                  <div key={i} className="flex items-center">
                    <div className={`p-4 rounded-lg border-2 ${node.highlight ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]' : 'border-border bg-background'} w-32 text-center relative`}>
                      <p className="text-sm font-bold text-foreground mb-1">{node.step}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{node.desc}</p>
                      {node.highlight && (
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold animate-bounce">!</div>
                      )}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-12 flex items-center justify-center text-muted-foreground">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-md">
                <p className="text-sm text-foreground/80">
                  <strong className="text-primary">Decision Point Highlight:</strong> Compliance Check involves asynchronous API call to screening engine. Designed fallback logic for timeout scenarios to queue for manual review rather than rejecting.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Artifact 3: Data Insight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-2xl overflow-hidden bg-card shadow-lg"
          >
             <div className="border-b border-border bg-muted/30 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-chart-2"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wider">DASH-04 :: Insurance System Health (Q3)</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-background p-4 rounded-xl border border-border flex flex-col items-center justify-center text-center">
                  <Server className="w-6 h-6 text-emerald-500 mb-2" />
                  <span className="text-2xl font-bold font-mono text-foreground">99.7%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">System Uptime</span>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border flex flex-col items-center justify-center text-center">
                  <Clock className="w-6 h-6 text-chart-4 mb-2" />
                  <span className="text-2xl font-bold font-mono text-foreground">18.4<span className="text-sm text-muted-foreground">h</span></span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Avg Resolution</span>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold font-mono text-foreground">94.0%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Test Coverage</span>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-6 h-6 text-chart-2 mb-2" />
                  <span className="text-2xl font-bold font-mono text-foreground">98.2%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">UAT Approval</span>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-sm">Monthly Error Volumes</h4>
                  <div className="flex items-center text-emerald-500 text-sm font-medium">
                    <TrendingDown className="w-4 h-4 mr-1" /> -12% vs Q2
                  </div>
                </div>
                {/* CSS Bar Chart */}
                <div className="flex items-end gap-4 h-32 pt-4">
                  {[
                    { label: "Jul", val: 80 },
                    { label: "Aug", val: 65 },
                    { label: "Sep", val: 45 },
                  ].map((bar) => (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full relative bg-primary/20 rounded-t-md overflow-hidden h-full flex items-end">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${bar.val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="w-full bg-primary rounded-t-md relative group-hover:bg-primary/80 transition-colors"
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                        </motion.div>
                      </div>
                      <span className="text-xs text-muted-foreground">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
