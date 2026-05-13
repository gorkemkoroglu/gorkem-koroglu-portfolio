import React from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, AlertTriangle, Target, Compass, Database,
  GitBranch, CheckSquare, FileText, ChevronRight, Check, Zap, Layers
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cases } from "@/lib/cases";
import { ScrollProgress } from "@/components/ScrollProgress";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

function SectionBlock({
  num,
  title,
  icon: Icon,
  children,
  className = "",
}: {
  num?: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-background border border-border/60 rounded-xl p-6 ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          {num && <p className="text-[10px] font-mono text-primary/40 mb-0.5">{num}</p>}
          <h3 className="text-base font-semibold text-foreground leading-tight">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function IssueList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/70 shrink-0 mt-2" />
          <div>
            <span className="text-sm font-medium text-foreground/85">{item.title} — </span>
            <span className="text-sm text-foreground/60">{item.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function CasePage() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { lang } = useLang();

  const caseData = cases.find((c) => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-muted-foreground text-sm">Case not found.</p>
          <button onClick={() => navigate("/")} className="text-primary text-sm underline underline-offset-4">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const c = lang === "tr" ? caseData.tr : caseData.en;

  const L = {
    back: lang === "tr" ? "Ana Sayfaya Dön" : "Back to Home",
    caseLabel: lang === "tr" ? `Vaka — ${String(caseData.number).padStart(2, "0")}` : `Case — ${String(caseData.number).padStart(2, "0")}`,
    bizProblem: lang === "tr" ? "İş Problemi" : "Business Problem",
    analysisGoal: lang === "tr" ? "Analiz Amacı" : "Analysis Goal",
    scope: lang === "tr" ? "Kapsam" : "Scope",
    outOfScope: lang === "tr" ? "Kapsam Dışı" : "Out of Scope",
    currentState: lang === "tr" ? "Mevcut Durum" : "Current State",
    keyIssues: lang === "tr" ? "Tespit Edilen Temel Sorunlar" : "Key Issues Identified",
    approach: lang === "tr" ? "Analiz Yaklaşımı" : "Analysis Approach",
    layers: lang === "tr" ? "İncelenen Katmanlar" : "Layers Examined",
    section8a: lang === "tr" ? "Önerilen Hata Kategorileri" : "Proposed Error Categories",
    section8b: lang === "tr" ? "Önerilen Analiz Çerçevesi" : "Proposed Analysis Framework",
    bizRules: lang === "tr" ? "Örnek İş Kuralları" : "Sample Business Rules",
    flow: c.flowTitle,
    opVisibility: lang === "tr" ? "Operasyonel Görünürlük İhtiyacı" : "Operational Visibility Need",
    opQuestions: lang === "tr" ? "Ekip Şu Sorulara Yanıt Bulabilmeli" : "Teams Should Be Able to Answer",
    screenFields: lang === "tr" ? "Önerilen Alan Yapısı" : "Proposed Field Structure",
    screenSections: lang === "tr" ? "Önerilen Ekran Alan Grupları" : "Proposed Screen Field Groups",
    testApproach: lang === "tr" ? "Test Yaklaşımı" : "Test Approach",
    testScenarios: lang === "tr" ? "Örnek Test Senaryoları" : "Sample Test Scenarios",
    uatApproach: lang === "tr" ? "UAT Yaklaşımı" : "UAT Approach",
    uatChecklist: lang === "tr" ? "UAT Doğrulama Checklist'i" : "UAT Validation Checklist",
    deliverables: lang === "tr" ? "Analist Deliverable'ları" : "Analyst Deliverables",
    expectedOutput: lang === "tr" ? "Beklenen İş Çıktısı" : "Expected Business Output",
    demonstrates: lang === "tr" ? "Bu Vaka Ne Gösteriyor?" : "What This Case Demonstrates",
    ruleNo: lang === "tr" ? "Kural No" : "No",
    bizRule: lang === "tr" ? "İş Kuralı" : "Rule",
    rationale: lang === "tr" ? "Gerekçe" : "Rationale",
    testNo: lang === "tr" ? "Test No" : "No",
    scenario: lang === "tr" ? "Senaryo" : "Scenario",
    expected: lang === "tr" ? "Beklenen Sonuç" : "Expected Result",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />

      {/* Top bar */}
      <div className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span
            className="font-heading font-bold text-lg text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            GK.
          </span>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {L.back}
          </button>
        </div>
      </div>

      <div className="pt-14">
        {/* Case header */}
        <div className="bg-card/20 border-b border-border/40 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade(0)}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">{L.caseLabel}</p>
              <h1 className="text-2xl md:text-3xl font-bold font-heading leading-snug text-foreground mb-5 max-w-3xl">
                {c.title}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.summary}</p>
              <div className="flex flex-wrap gap-2">
                {c.meta.map((m) => (
                  <span key={m} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-5">

          {/* 01 + 02: Business Problem & Analysis Goal */}
          <motion.div {...fade(0.04)} className="grid md:grid-cols-2 gap-5">
            <SectionBlock num="01" title={L.bizProblem} icon={AlertTriangle} className="h-full">
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{c.businessProblem}</p>
              {c.businessProblemBullets && <BulletList items={c.businessProblemBullets} />}
            </SectionBlock>
            <SectionBlock num="02" title={L.analysisGoal} icon={Target} className="h-full">
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{c.analysisGoal}</p>
              {c.analysisGoalItems && <BulletList items={c.analysisGoalItems} />}
            </SectionBlock>
          </motion.div>

          {/* 03: Scope */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="03" title={L.scope} icon={Compass}>
              <div className={c.outOfScope ? "grid md:grid-cols-2 gap-6" : ""}>
                <div>
                  <BulletList items={c.scope} />
                </div>
                {c.outOfScope && (
                  <div>
                    <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-3">{L.outOfScope}</p>
                    <ul className="space-y-2">
                      {c.outOfScope.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground/60">
                          <span className="w-3 h-px bg-border/60 shrink-0 mt-[0.6rem]" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SectionBlock>
          </motion.div>

          {/* 04: Current State */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="04" title={L.currentState} icon={Database}>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{c.currentState}</p>
              {c.currentStateBullets && <BulletList items={c.currentStateBullets} />}
            </SectionBlock>
          </motion.div>

          {/* 05: Key Issues */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="05" title={L.keyIssues} icon={AlertTriangle} className="border-amber-500/20 bg-amber-500/5">
              <IssueList items={c.keyIssues} />
            </SectionBlock>
          </motion.div>

          {/* 06: Analysis Approach */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="06" title={L.approach} icon={Compass}>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{c.analysisApproach}</p>
              {c.analysisApproachItems && <BulletList items={c.analysisApproachItems} />}
            </SectionBlock>
          </motion.div>

          {/* 07: Layers */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="07" title={L.layers} icon={Layers}>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.layers.map((layer, i) => (
                  <div key={i} className="bg-card/50 border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-sm font-semibold text-foreground">{layer.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </motion.div>

          {/* 08: Error Categories OR Framework */}
          {c.errorCategories && (
            <motion.div {...fade(0.04)}>
              <SectionBlock num="08" title={L.section8a} icon={GitBranch}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {c.errorCategories.map((cat, i) => {
                    const clrs = [
                      "border-blue-500/25 bg-blue-500/5 text-blue-400",
                      "border-amber-500/25 bg-amber-500/5 text-amber-400",
                      "border-purple-500/25 bg-purple-500/5 text-purple-400",
                      "border-red-500/25 bg-red-500/5 text-red-400",
                    ];
                    return (
                      <div key={i} className={`border rounded-lg p-4 ${clrs[i]}`}>
                        <h4 className="text-sm font-semibold mb-1">{cat.title}</h4>
                        <p className="text-xs text-foreground/55 leading-relaxed">{cat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </SectionBlock>
            </motion.div>
          )}

          {c.frameworkItems && (
            <motion.div {...fade(0.04)}>
              <SectionBlock num="08" title={L.section8b} icon={GitBranch}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {c.frameworkItems.map((fw, i) => (
                    <div key={i} className="bg-card/50 border border-border/40 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-primary w-5">{fw.label}</span>
                        <h4 className="text-sm font-semibold text-foreground">{fw.title}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {fw.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-foreground/60">
                            <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0 mt-[0.45rem]" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </motion.div>
          )}

          {/* 09: Business Rules */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="09" title={L.bizRules} icon={FileText}>
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-[10px] font-mono text-primary/50 uppercase tracking-widest whitespace-nowrap w-20">{L.ruleNo}</th>
                      <th className="text-left py-2 pr-4 text-[10px] font-mono text-primary/50 uppercase tracking-widest">{L.bizRule}</th>
                      <th className="text-left py-2 text-[10px] font-mono text-primary/50 uppercase tracking-widest">{L.rationale}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.businessRules.map((rule, i) => (
                      <tr key={i} className="border-b border-border/25 hover:bg-card/30 transition-colors">
                        <td className="py-3 pr-4 text-xs font-mono text-primary whitespace-nowrap">{rule.id}</td>
                        <td className="py-3 pr-4 text-sm text-foreground/75 leading-relaxed">{rule.rule}</td>
                        <td className="py-3 text-xs text-muted-foreground leading-relaxed">{rule.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionBlock>
          </motion.div>

          {/* 10: Flow */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="10" title={L.flow} icon={GitBranch}>
              <div className="flex flex-col gap-0">
                {c.flowSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-[10px] font-mono font-bold text-primary">
                        {i + 1}
                      </div>
                      {i < c.flowSteps.length - 1 && <div className="w-px h-5 bg-border/40 my-1" />}
                    </div>
                    <p className={`text-sm leading-relaxed pt-0.5 ${i < c.flowSteps.length - 1 ? "pb-4" : ""} ${
                      i === c.flowSteps.length - 1 ? "text-primary/75" : "text-foreground/70"
                    }`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </motion.div>

          {/* 11: Operational visibility or questions */}
          <motion.div {...fade(0.04)}>
            {c.operationalVisibility ? (
              <div className="grid md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                  <SectionBlock num="11" title={L.opVisibility} icon={Zap} className="h-full">
                    <p className="text-sm text-foreground/70 leading-relaxed">{c.operationalVisibility}</p>
                  </SectionBlock>
                </div>
                {c.screenFields && (
                  <SectionBlock num="12" title={L.screenFields} icon={CheckSquare} className="h-full border-primary/20 bg-primary/5">
                    <ul className="space-y-2">
                      {c.screenFields.map((field, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {field}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {c.operationalQuestions && (
                  <SectionBlock num="11" title={L.opQuestions} icon={Zap} className="h-full">
                    <ul className="space-y-2.5">
                      {c.operationalQuestions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                )}
                {(c.screenFields || c.screenSections) && (
                  <SectionBlock
                    num="12"
                    title={c.screenSections ? L.screenSections : L.screenFields}
                    icon={CheckSquare}
                    className="h-full border-primary/20 bg-primary/5"
                  >
                    <ul className="space-y-2">
                      {(c.screenSections ?? c.screenFields ?? []).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                )}
              </div>
            )}
          </motion.div>

          {/* 13: Test + Test Scenarios */}
          <motion.div {...fade(0.04)}>
            <SectionBlock num="13" title={L.testApproach} icon={CheckSquare}>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">{c.testApproach}</p>
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary/50 mb-3">{L.testScenarios}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 pr-4 text-[10px] font-mono text-primary/50 uppercase tracking-widest whitespace-nowrap w-20">{L.testNo}</th>
                      <th className="text-left py-2 pr-4 text-[10px] font-mono text-primary/50 uppercase tracking-widest">{L.scenario}</th>
                      <th className="text-left py-2 text-[10px] font-mono text-primary/50 uppercase tracking-widest">{L.expected}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.testScenarios.map((ts, i) => (
                      <tr key={i} className="border-b border-border/25 hover:bg-card/30 transition-colors">
                        <td className="py-3 pr-4 text-xs font-mono text-primary whitespace-nowrap">{ts.id}</td>
                        <td className="py-3 pr-4 text-sm text-foreground/75 leading-relaxed">{ts.scenario}</td>
                        <td className="py-3 text-xs text-muted-foreground leading-relaxed">{ts.expected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionBlock>
          </motion.div>

          {/* 14: UAT */}
          <motion.div {...fade(0.04)} className="grid md:grid-cols-2 gap-5">
            <SectionBlock num="14" title={L.uatApproach} icon={CheckSquare} className="h-full">
              <p className="text-sm text-foreground/70 leading-relaxed">{c.uatApproach}</p>
            </SectionBlock>
            <SectionBlock num="" title={L.uatChecklist} icon={Check} className="h-full">
              <ul className="space-y-2.5">
                {c.uatChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <div className="w-4 h-4 rounded border border-primary/35 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-primary/50" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </motion.div>

          {/* 15 + 16: Deliverables + Expected Output */}
          <motion.div {...fade(0.04)} className="grid md:grid-cols-2 gap-5">
            <SectionBlock num="15" title={L.deliverables} icon={FileText} className="h-full">
              <BulletList items={c.deliverables} />
            </SectionBlock>
            <SectionBlock num="16" title={L.expectedOutput} icon={Target} className="h-full">
              <BulletList items={c.expectedOutput} />
            </SectionBlock>
          </motion.div>

          {/* 17: Demonstrates */}
          <motion.div {...fade(0.04)}>
            <div className="border border-primary/20 bg-primary/5 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/40 mb-0.5">17</p>
                  <h3 className="text-base font-semibold text-foreground">{L.demonstrates}</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.demonstrates.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="pt-4 border-t border-border/40 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {L.back}
            </button>
            <span className="text-xs text-muted-foreground font-mono">Görkem Köroğlu</span>
          </div>

        </div>
      </div>
    </div>
  );
}
