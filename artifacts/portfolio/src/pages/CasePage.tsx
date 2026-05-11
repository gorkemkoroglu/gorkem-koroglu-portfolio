import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Tag, Layers, AlertTriangle, Target, Compass,
  Database, GitBranch, CheckSquare, FileText, ChevronRight,
  Check, Zap
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cases, testScenariosEn, testScenariosTr } from "@/lib/cases";
import { ScrollProgress } from "@/components/ScrollProgress";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

function SectionHeading({ label, title, icon: Icon }: { label: string; title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-primary/60 mb-0.5">{label}</p>
        <h3 className="text-lg font-semibold text-foreground leading-tight">{title}</h3>
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-background border border-border/60 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CasePage() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { lang, t } = useLang();

  const caseData = cases.find((c) => c.id === id);
  if (!caseData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Case not found.</p>
          <button onClick={() => navigate("/")} className="text-primary underline text-sm">
            Go back
          </button>
        </div>
      </div>
    );
  }

  const c = lang === "tr" ? caseData.tr : caseData.en;
  const testScenarios = lang === "tr" ? testScenariosTr : testScenariosEn;

  const labels = {
    back: lang === "tr" ? "Ana Sayfaya Dön" : "Back to Home",
    caseLabel: lang === "tr" ? "Analiz Vakası" : "Analysis Case",
    bizProblem: lang === "tr" ? "İş Problemi" : "Business Problem",
    analysisGoal: lang === "tr" ? "Analiz Amacı" : "Analysis Goal",
    scope: lang === "tr" ? "Kapsam" : "Scope",
    currentState: lang === "tr" ? "Mevcut Durum" : "Current State",
    keyIssues: lang === "tr" ? "Tespit Edilen Temel Sorunlar" : "Key Issues Identified",
    approach: lang === "tr" ? "Analiz Yaklaşımı" : "Analysis Approach",
    layers: lang === "tr" ? "İncelenen Katmanlar" : "Layers Examined",
    errorCategories: lang === "tr" ? "Önerilen Hata Kategorileri" : "Proposed Error Categories",
    bizRules: lang === "tr" ? "Örnek İş Kuralları" : "Sample Business Rules",
    flow: lang === "tr" ? "Önerilen Hata Ayrıştırma Akışı" : "Proposed Error Separation Flow",
    opVisibility: lang === "tr" ? "Operasyonel Görünürlük İhtiyacı" : "Operational Visibility Need",
    screenFields: lang === "tr" ? "Önerilen Operasyon Ekranı Alanları" : "Proposed Operation Screen Fields",
    testApproach: lang === "tr" ? "Test Yaklaşımı" : "Test Approach",
    testScenarios: lang === "tr" ? "Örnek Test Senaryoları" : "Sample Test Scenarios",
    uatApproach: lang === "tr" ? "UAT Yaklaşımı" : "UAT Approach",
    uatChecklist: lang === "tr" ? "UAT Doğrulama Checklist'i" : "UAT Validation Checklist",
    deliverables: lang === "tr" ? "Analist Deliverable'ları" : "Analyst Deliverables",
    expectedOutput: lang === "tr" ? "Beklenen İş Çıktısı" : "Expected Business Output",
    demonstrates: lang === "tr" ? "Bu Vaka Ne Gösteriyor?" : "What This Case Demonstrates",
    ruleNo: lang === "tr" ? "Kural No" : "Rule No",
    bizRule: lang === "tr" ? "İş Kuralı" : "Business Rule",
    rationale: lang === "tr" ? "Gerekçe" : "Rationale",
    testNo: lang === "tr" ? "Test No" : "Test No",
    scenario: lang === "tr" ? "Senaryo" : "Scenario",
    expected: lang === "tr" ? "Beklenen Sonuç" : "Expected Result",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />

      {/* Minimal top bar */}
      <div className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-heading font-bold text-lg text-primary">GK.</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {labels.back}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-14">
        {/* Hero header */}
        <div className="bg-card/30 border-b border-border/40 py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade(0)}>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary mb-4">
                <Tag className="w-3 h-3" />
                {labels.caseLabel}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold font-heading leading-snug text-foreground mb-5 max-w-3xl">
                {c.title}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.summary}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

          {/* Business Problem */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="01" title={labels.bizProblem} icon={AlertTriangle} />
              <p className="text-sm text-foreground/75 leading-relaxed">{c.businessProblem}</p>
            </Card>
          </motion.div>

          {/* Analysis Goal */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="02" title={labels.analysisGoal} icon={Target} />
              <p className="text-sm text-foreground/75 leading-relaxed">{c.analysisGoal}</p>
            </Card>
          </motion.div>

          {/* Scope + Current State side by side */}
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div {...fade(0.05)}>
              <Card className="h-full">
                <SectionHeading label="03" title={labels.scope} icon={Compass} />
                <BulletList items={c.scope} />
              </Card>
            </motion.div>
            <motion.div {...fade(0.08)}>
              <Card className="h-full">
                <SectionHeading label="04" title={labels.currentState} icon={Database} />
                <p className="text-sm text-foreground/75 leading-relaxed">{c.currentState}</p>
              </Card>
            </motion.div>
          </div>

          {/* Key Issues */}
          <motion.div {...fade(0.05)}>
            <Card className="border-amber-500/20 bg-amber-500/5">
              <SectionHeading label="05" title={labels.keyIssues} icon={AlertTriangle} />
              <BulletList items={c.keyIssues} />
            </Card>
          </motion.div>

          {/* Analysis Approach */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="06" title={labels.approach} icon={Compass} />
              <p className="text-sm text-foreground/75 leading-relaxed">{c.analysisApproach}</p>
            </Card>
          </motion.div>

          {/* Layers Examined */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="07" title={labels.layers} icon={Layers} />
              <div className="grid sm:grid-cols-2 gap-4">
                {c.layers.map((layer, i) => (
                  <div key={i} className="bg-card/60 border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-primary/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-sm font-semibold text-foreground">{layer.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Error Categories */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="08" title={labels.errorCategories} icon={GitBranch} />
              <div className="grid sm:grid-cols-2 gap-4">
                {c.errorCategories.map((cat, i) => {
                  const colors = [
                    "border-blue-500/30 bg-blue-500/5 text-blue-400",
                    "border-amber-500/30 bg-amber-500/5 text-amber-400",
                    "border-purple-500/30 bg-purple-500/5 text-purple-400",
                    "border-red-500/30 bg-red-500/5 text-red-400",
                  ];
                  return (
                    <div key={i} className={`border rounded-lg p-4 ${colors[i]}`}>
                      <h4 className="text-sm font-semibold mb-1">{cat.title}</h4>
                      <p className="text-xs text-foreground/60 leading-relaxed">{cat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Business Rules Table */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="09" title={labels.bizRules} icon={FileText} />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-xs font-mono text-primary/60 whitespace-nowrap">{labels.ruleNo}</th>
                      <th className="text-left py-2 pr-4 text-xs font-mono text-primary/60">{labels.bizRule}</th>
                      <th className="text-left py-2 text-xs font-mono text-primary/60">{labels.rationale}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.businessRules.map((rule, i) => (
                      <tr key={i} className="border-b border-border/30 hover:bg-card/40 transition-colors">
                        <td className="py-3 pr-4 text-xs font-mono text-primary whitespace-nowrap">{rule.id}</td>
                        <td className="py-3 pr-4 text-sm text-foreground/80 leading-relaxed">{rule.rule}</td>
                        <td className="py-3 text-xs text-muted-foreground leading-relaxed">{rule.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Flow Stepper */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="10" title={labels.flow} icon={GitBranch} />
              <div className="flex flex-col gap-0">
                {c.flowSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-[11px] font-mono font-bold">
                        {i + 1}
                      </div>
                      {i < c.flowSteps.length - 1 && (
                        <div className="w-px h-6 bg-border/50 my-1" />
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed pt-1.5 pb-5 ${i < c.flowSteps.length - 1 ? "" : "pb-0"} ${
                      i === 3 || i === 6
                        ? "text-amber-400/80"
                        : i === c.flowSteps.length - 1
                        ? "text-primary/80"
                        : "text-foreground/75"
                    }`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Operational Visibility */}
          <motion.div {...fade(0.05)}>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <Card className="h-full">
                  <SectionHeading label="11" title={labels.opVisibility} icon={Zap} />
                  <p className="text-sm text-foreground/75 leading-relaxed">{c.operationalVisibility}</p>
                </Card>
              </div>
              <div>
                <Card className="h-full border-primary/20 bg-primary/5">
                  <SectionHeading label="12" title={labels.screenFields} icon={CheckSquare} />
                  <ul className="space-y-2">
                    {c.screenFields.map((field, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Test Approach */}
          <motion.div {...fade(0.05)}>
            <Card>
              <SectionHeading label="13" title={labels.testApproach} icon={CheckSquare} />
              <p className="text-sm text-foreground/75 leading-relaxed mb-6">{c.testApproach}</p>

              <h4 className="text-sm font-semibold text-foreground mb-3">{labels.testScenarios}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-xs font-mono text-primary/60 whitespace-nowrap">{labels.testNo}</th>
                      <th className="text-left py-2 pr-4 text-xs font-mono text-primary/60">{labels.scenario}</th>
                      <th className="text-left py-2 text-xs font-mono text-primary/60">{labels.expected}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testScenarios.map((ts, i) => (
                      <tr key={i} className="border-b border-border/30 hover:bg-card/40 transition-colors">
                        <td className="py-3 pr-4 text-xs font-mono text-primary whitespace-nowrap">{ts.id}</td>
                        <td className="py-3 pr-4 text-sm text-foreground/80 leading-relaxed">{ts.scenario}</td>
                        <td className="py-3 text-xs text-muted-foreground leading-relaxed">{ts.expected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* UAT */}
          <motion.div {...fade(0.05)}>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <SectionHeading label="14" title={labels.uatApproach} icon={CheckSquare} />
                <p className="text-sm text-foreground/75 leading-relaxed">{c.uatApproach}</p>
              </Card>
              <Card>
                <SectionHeading label="" title={labels.uatChecklist} icon={Check} />
                <ul className="space-y-2.5">
                  {c.uatChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <div className="w-4 h-4 rounded border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-sm bg-primary/50" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* Deliverables + Expected Output */}
          <motion.div {...fade(0.05)}>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <SectionHeading label="15" title={labels.deliverables} icon={FileText} />
                <BulletList items={c.deliverables} />
              </Card>
              <Card>
                <SectionHeading label="16" title={labels.expectedOutput} icon={Target} />
                <BulletList items={c.expectedOutput} />
              </Card>
            </div>
          </motion.div>

          {/* What this case demonstrates */}
          <motion.div {...fade(0.05)}>
            <div className="border border-primary/25 bg-primary/5 rounded-xl p-6">
              <SectionHeading label="17" title={labels.demonstrates} icon={Zap} />
              <div className="grid sm:grid-cols-2 gap-3">
                {c.demonstrates.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer nav */}
          <div className="pt-4 border-t border-border/40 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {labels.back}
            </button>
            <span className="text-xs text-muted-foreground font-mono">Görkem Köroğlu — Portfolio</span>
          </div>

        </div>
      </div>
    </div>
  );
}
