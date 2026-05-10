import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Square } from "lucide-react";
import { useLang } from "@/lib/i18n";

interface QA {
  question: string;
  answer: string;
  tag: string;
  icon: string;
}

const TAG_COLORS: Record<string, string> = {
  Mindset: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Analysis Approach": "bg-primary/10 text-primary border-primary/20",
  "Technical Awareness": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Strongest Areas": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Working Style": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Career Direction": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Yönelim": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Analiz Yaklaşımı": "bg-primary/10 text-primary border-primary/20",
  "Teknik Farkındalık": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Güçlü Alanlar": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Çalışma Tarzı": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Kariyer Yönü": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const EN_QA: QA[] = [
  {
    question: "How would you describe yourself?",
    answer: "I would describe myself as a business analyst who brings clarity between business needs and technical implementation. I like to look at processes not only from the surface level, but also through business rules, system behavior, data flow, and user impact. Turning ambiguity into something more structured, testable, and actionable is one of the areas where I create the most value.",
    tag: "Mindset",
    icon: "🧠",
  },
  {
    question: "What makes you different from other business analysts?",
    answer: "What differentiates me most is that I do not see analysis as documentation alone. For me, good analysis means asking the right questions, breaking down the problem, comparing expected and actual behavior, and producing clarity that teams can act on. My technical awareness also helps me work more effectively with development and testing teams while still keeping business needs visible and understandable.",
    tag: "Analysis Approach",
    icon: "🔍",
  },
  {
    question: "Why business analysis?",
    answer: "What I like about business analysis is that it requires thinking across people, systems, and processes at the same time. I enjoy understanding business needs, evaluating their technical implications, and helping shape workable solutions. Turning complexity into clarity is the part of the role I enjoy the most.",
    tag: "Mindset",
    icon: "💡",
  },
  {
    question: "How does your technical background support your role?",
    answer: "I do not position technical knowledge as my main identity; I see it as something that strengthens my analyst perspective. Being able to validate data with SQL, understand service behavior, read integration logic, and having familiarity with Python and data analysis helps me assess requirements more solidly and support more reliable testing and validation.",
    tag: "Technical Awareness",
    icon: "⚙️",
  },
  {
    question: "What are your strongest areas?",
    answer: "My strongest areas include systems analysis, functional analysis, requirement clarification, test and UAT coordination, data validation, and root cause investigation. Especially in banking and financial technology environments, where accuracy matters greatly, I believe structured and careful analysis makes a real difference.",
    tag: "Strongest Areas",
    icon: "🎯",
  },
  {
    question: "How do you approach a problem?",
    answer: "I first try to define the problem clearly. What is actually wrong, who is impacted, what was expected, and what is currently happening? Then I break the issue into layers: business rule, screen behavior, service flow, data impact, and operational outcome. This helps me move beyond symptoms and understand both the source of the issue and the most meaningful solution path.",
    tag: "Analysis Approach",
    icon: "🗂️",
  },
  {
    question: "What is your working style within a team?",
    answer: "My working style is structured, clarifying, and collaborative. I believe many project issues come from people interpreting the same need differently. That is why I care about building shared understanding across meetings, analysis outputs, and validation steps. I usually work in a calm, organized, and accountable way.",
    tag: "Working Style",
    icon: "🤝",
  },
  {
    question: "How do you want to grow in the future?",
    answer: "I want to deepen my business analysis capabilities while continuing to strengthen my awareness in data, AI, and modern technology thinking. The direction that fits me best is becoming an even stronger business analyst with solid technical and analytical awareness, without losing the core value of analysis itself.",
    tag: "Career Direction",
    icon: "🚀",
  },
];

const TR_QA: QA[] = [
  {
    question: "Kendinizi nasıl tanımlarsınız?",
    answer: "Kendimi, iş ihtiyacı ile teknik uygulama arasında netlik oluşturan bir iş analisti olarak tanımlıyorum. Süreçleri sadece yüzeyden değil, iş kuralı, sistem davranışı, veri akışı ve kullanıcı etkisiyle birlikte okumayı seviyorum. Özellikle belirsiz talepleri sadeleştirmek, ekipler arasında ortak anlayış oluşturmak ve çözümü daha uygulanabilir hale getirmek en güçlü yönlerim arasında.",
    tag: "Yönelim",
    icon: "🧠",
  },
  {
    question: "Sizi diğer iş analistlerinden ayıran yön nedir?",
    answer: "Beni ayıran en önemli nokta, analizi yalnızca dokümantasyon olarak görmemem. Benim için iyi analiz; doğru soruyu sormak, problemi parçalamak, beklenen davranış ile gerçekleşen sonucu karşılaştırmak ve gerçekten aksiyon alınabilir netlik üretmektir. Teknik farkındalığım sayesinde geliştirme ve test ekipleriyle daha rahat hizalanabiliyorum; aynı zamanda iş tarafının ihtiyacını da sade ve anlaşılır şekilde taşıyabiliyorum.",
    tag: "Analiz Yaklaşımı",
    icon: "🔍",
  },
  {
    question: "Neden iş analistliği?",
    answer: "İş analistliğini sevme nedenim, hem insan hem sistem hem de süreç tarafını aynı anda düşünmeyi gerektirmesi. Bir yandan iş ihtiyacını anlamlandırırken, diğer yandan bunun teknik karşılığını ve operasyonel etkisini değerlendirmek bana çok uygun geliyor. Belirsizliği netliğe dönüştürmek, bu rolün en çok sevdiğim tarafı.",
    tag: "Yönelim",
    icon: "💡",
  },
  {
    question: "Teknik bilginiz bu role nasıl katkı sağlıyor?",
    answer: "Teknik bilgimi ana rolümün yerine koymuyorum; onu analist bakışımı güçlendiren bir avantaj olarak görüyorum. SQL ile veri doğrulama yapabilmek, servis davranışlarını okuyabilmek, API ve entegrasyon mantığını anlayabilmek ya da Python ve veri analizi tarafına aşina olmak; gereksinimleri daha sağlam değerlendirmeme ve test süreçlerini daha doğru çerçevelememe yardımcı oluyor.",
    tag: "Teknik Farkındalık",
    icon: "⚙️",
  },
  {
    question: "En güçlü olduğunuz çalışma alanları neler?",
    answer: "Sistem analizi, fonksiyonel analiz, gereksinim netleştirme, test ve UAT koordinasyonu, veri doğrulama ve kök neden incelemesi benim en güçlü olduğum alanlar. Özellikle bankacılık ve finansal teknolojiler gibi hata toleransının düşük olduğu alanlarda, dikkatli ve yapılandırılmış çalışmanın önemli olduğuna inanıyorum.",
    tag: "Güçlü Alanlar",
    icon: "🎯",
  },
  {
    question: "Bir problemi nasıl ele alırsınız?",
    answer: "Önce problemi tanımlamaya çalışırım. Gerçek sorun ne, kim etkileniyor, beklenen davranış neydi ve mevcutta ne oluyor gibi sorularla başlarım. Sonrasında süreci katmanlarına ayırırım: iş kuralı, ekran davranışı, servis akışı, veri etkisi ve operasyonel sonuç. Böylece sadece semptomu değil, sorunun kaynağını ve kalıcı çözüm alanını daha net görebilirim.",
    tag: "Analiz Yaklaşımı",
    icon: "🗂️",
  },
  {
    question: "Takım içinde nasıl bir çalışma tarzınız var?",
    answer: "Ben daha çok yapılandıran, netleştiren ve iletişimi güçlendiren bir çalışma tarzına sahibim. İnsanların aynı şeyi farklı anlamasının projelerde ciddi zaman kaybettirdiğini düşünüyorum. Bu yüzden toplantılarda, analizlerde ve test süreçlerinde ortak anlayış yaratmayı önemsiyorum. Sakin, düzenli ve sahiplenen bir şekilde çalışırım.",
    tag: "Çalışma Tarzı",
    icon: "🤝",
  },
  {
    question: "Gelecekte kendinizi nasıl geliştirmek istiyorsunuz?",
    answer: "İş analizi tarafında daha da derinleşirken, veri, yapay zekâ farkındalığı ve modern ürün ve teknoloji yaklaşımlarıyla kendimi desteklemeye devam etmek istiyorum. Özellikle teknik ve analitik farkındalığı yüksek, ama merkezinde yine güçlü iş analizi bulunan bir kariyer çizgisi benim için en doğru gelişim alanı.",
    tag: "Kariyer Yönü",
    icon: "🚀",
  },
];

function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = (text: string, lang: string, idx: number) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    if (activeIdx === idx && speaking) {
      setSpeaking(false);
      setActiveIdx(null);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === "tr" ? "tr-TR" : "en-US";
    utter.rate = 0.92;
    utter.pitch = 1;
    utter.onstart = () => { setSpeaking(true); setActiveIdx(idx); };
    utter.onend = () => { setSpeaking(false); setActiveIdx(null); };
    utter.onerror = () => { setSpeaking(false); setActiveIdx(null); };
    window.speechSynthesis.speak(utter);
  };

  const stop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setActiveIdx(null);
  };

  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, []);

  return { speak, stop, speaking, activeIdx, supported };
}

export function BeyondCV() {
  const { t, lang } = useLang();
  const items = lang === "tr" ? TR_QA : EN_QA;
  const { speak, speaking, activeIdx, supported } = useSpeech();

  const heading = lang === "tr" ? "CV'nin Ötesinde" : "Beyond the CV";
  const label = lang === "tr" ? "İK ve işe alım süreçlerinde sık sorulan sorular" : "Short answers to questions recruiters and hiring managers often ask";
  const subLabel = lang === "tr" ? "İK Sorularına Yanıtlar" : "HR Questions, Answered";

  return (
    <section id="beyondcv" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{label}</p>
          <h2 className="text-4xl font-bold font-heading mb-3">{heading}</h2>
          <div className="h-px w-16 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground text-sm font-medium">{subLabel}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, idx) => {
            const isActive = activeIdx === idx;
            const tagClass = TAG_COLORS[item.tag] ?? "bg-muted/10 text-muted-foreground border-border/30";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group relative bg-card border rounded-2xl p-6 transition-all duration-300 ${
                  isActive
                    ? "border-primary/50 shadow-[0_0_30px_rgba(0,200,200,0.1)]"
                    : "border-border/60 hover:border-primary/25 hover:shadow-[0_0_20px_rgba(0,200,200,0.06)]"
                }`}
              >
                {/* Top row: icon + tag + voice button */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl leading-none">{item.icon}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagClass}`}>
                      {item.tag}
                    </span>
                  </div>
                  {supported && (
                    <button
                      onClick={() => speak(item.question + ". " + item.answer, lang, idx)}
                      className={`shrink-0 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all duration-200 ${
                        isActive
                          ? "border-primary/50 text-primary bg-primary/10"
                          : "border-border/40 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5"
                      }`}
                      title={lang === "tr" ? "Seslendir" : "Play audio"}
                    >
                      {isActive ? (
                        <>
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            <Square size={10} className="fill-current" />
                          </motion.span>
                          <span>{lang === "tr" ? "Durdur" : "Stop"}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={11} />
                          <span>{lang === "tr" ? "Dinle" : "Listen"}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Question */}
                <h3 className="font-semibold text-foreground text-sm mb-3 leading-snug group-hover:text-primary/90 transition-colors">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.answer}
                </p>

                {/* Active speaking bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-6 right-6 h-px overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-primary"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
