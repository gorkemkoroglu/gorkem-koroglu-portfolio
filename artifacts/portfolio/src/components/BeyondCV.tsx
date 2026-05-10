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
    answer: "I'm a Technical Analyst who works at the intersection of business needs and technical systems. I read requirements, understand system behavior, validate data, and make the gap between expectation and reality visible — and actionable. Structured thinking and clear communication are at the core of how I work.",
    tag: "Mindset",
    icon: "🧠",
  },
  {
    question: "What makes you different from other analysts?",
    answer: "I don't treat analysis as documentation. For me, good analysis means asking the right questions, layering the problem, comparing expected and actual behavior, and producing something teams can act on. My technical awareness lets me work fluidly with development and testing teams without losing sight of the business need.",
    tag: "Analysis Approach",
    icon: "🔍",
  },
  {
    question: "Why technical analysis?",
    answer: "I'm drawn to the space where business logic and system behavior meet — because that's where requirements become real and assumptions get tested. I enjoy reading a system for what it actually does, not just what it's supposed to do. That kind of honest assessment is where I add the most value.",
    tag: "Mindset",
    icon: "💡",
  },
  {
    question: "How does your technical background support your work?",
    answer: "Technical knowledge is a tool, not my identity. Being able to validate data with SQL, read integration specs, understand service response logic, or trace a payload through an API — these make my analysis more grounded. I can evaluate requirements more precisely and design more realistic test scenarios.",
    tag: "Technical Awareness",
    icon: "⚙️",
  },
  {
    question: "What are your strongest areas?",
    answer: "Systems analysis, requirement clarification, integration behavior, data validation, and UAT coordination. In banking and financial technology environments — where edge cases matter and errors are costly — structured, careful analysis is not optional. That's the environment I'm most comfortable in.",
    tag: "Strongest Areas",
    icon: "🎯",
  },
  {
    question: "How do you approach a problem?",
    answer: "I start by defining what's actually happening versus what should be happening — and for whom. Then I break it into layers: business rule, system behavior, data impact, operational effect. That structure helps me move past symptoms toward root cause, and toward a solution that's actually testable.",
    tag: "Analysis Approach",
    icon: "🗂️",
  },
  {
    question: "What is your working style within a team?",
    answer: "Calm, structured, and accountable. I believe many project issues start when people interpret the same requirement differently. So I focus on shared understanding — through clear documentation, well-framed questions, and validation steps that leave no room for ambiguity.",
    tag: "Working Style",
    icon: "🤝",
  },
  {
    question: "Where do you want to grow professionally?",
    answer: "I want to go deeper in the technical analyst space — stronger in system design, integration behavior, and validation thinking. I'm also interested in how AI tools are changing the way analysts work. The goal is sharper, faster, more reliable analysis in complex environments.",
    tag: "Career Direction",
    icon: "🚀",
  },
];

const TR_QA: QA[] = [
  {
    question: "Kendinizi nasıl tanımlarsınız?",
    answer: "İş ihtiyacı, sistem davranışı ve teknik doğrulamanın kesiştiği noktada çalışan bir Technical Analyst'im. Gereksinimleri okur, sistemin ne yaptığını anlar, veriyi doğrular ve beklenti ile gerçek arasındaki farkı görünür — ve aksiyon alınabilir — hale getiririm. Yapılandırılmış düşünce ve net iletişim, çalışma biçimimin merkezinde.",
    tag: "Yönelim",
    icon: "🧠",
  },
  {
    question: "Sizi diğer analistlerden ayıran ne?",
    answer: "Analizi yalnızca dokümantasyon olarak görmüyorum. Benim için iyi analiz; doğru soruyu sormak, problemi katmanlamak, beklenen ve gerçekleşen davranışı karşılaştırmak ve ekiplerin üzerine aksiyon alabildiği bir netlik üretmek demek. Teknik farkındalığım geliştirme ve test ekipleriyle daha akıcı çalışmamı sağlarken iş ihtiyacını da kaybetmiyorum.",
    tag: "Analiz Yaklaşımı",
    icon: "🔍",
  },
  {
    question: "Neden bu rol?",
    answer: "İş mantığının sistem davranışıyla buluştuğu alana ilgi duyuyorum; çünkü gereksinimler orada gerçekleşiyor ve varsayımlar orada sınava giriyor. Bir sistemi yalnızca ne yapması gerektiği değil, gerçekte ne yaptığı açısından okumaktan keyif alıyorum. Bu dürüst değerlendirme, en fazla değer kattığım yer.",
    tag: "Yönelim",
    icon: "💡",
  },
  {
    question: "Teknik geçmişiniz bu işe nasıl yansıyor?",
    answer: "Teknik bilgi benim için bir araç, kimlik değil. SQL ile veri doğrulayabilmek, entegrasyon dökümanlarını okuyabilmek, servis yanıt mantığını anlayabilmek ya da bir API üzerinden payload'ı izleyebilmek — bunlar analizimi daha somut kılıyor. Gereksinimleri daha isabetli değerlendirebiliyor, test senaryolarını daha gerçekçi tasarlayabiliyorum.",
    tag: "Teknik Farkındalık",
    icon: "⚙️",
  },
  {
    question: "En güçlü olduğunuz alanlar neler?",
    answer: "Sistem analizi, gereksinim netleştirme, entegrasyon davranışı, veri doğrulama ve UAT koordinasyonu. Bankacılık ve finansal teknolojiler gibi hata maliyetinin yüksek olduğu ortamlarda yapılandırılmış ve dikkatli analiz bir tercih değil, zorunluluk. Ben bu ortamda en rahat çalışan kişiyim.",
    tag: "Güçlü Alanlar",
    icon: "🎯",
  },
  {
    question: "Bir problemi nasıl ele alırsınız?",
    answer: "Önce ne olduğunu, kimin etkilendiğini, ne bekleniyor olduğunu ve mevcutta ne yaşandığını tanımlarım. Sonra problemi katmanlara ayırırım: iş kuralı, sistem davranışı, veri etkisi, operasyonel sonuç. Bu yapı semptomun ötesine geçmemi, kök nedene ve gerçekten test edilebilir bir çözüm yoluna ulaşmamı sağlar.",
    tag: "Analiz Yaklaşımı",
    icon: "🗂️",
  },
  {
    question: "Takım içinde nasıl çalışırsınız?",
    answer: "Sakin, yapılandırılmış ve hesap verebilir. Pek çok proje sorununun, aynı gereksinimin farklı yorumlanmasından kaynaklandığını düşünüyorum. Bu yüzden ortak anlayış kurmaya odaklanıyorum — net dokümantasyon, iyi çerçevelenmiş sorular ve belirsizliğe yer bırakmayan doğrulama adımlarıyla.",
    tag: "Çalışma Tarzı",
    icon: "🤝",
  },
  {
    question: "Kariyer olarak nereye gitmek istiyorsunuz?",
    answer: "Technical Analyst alanında derinleşmek istiyorum — sistem tasarımı, entegrasyon davranışı ve doğrulama düşüncesi konularında daha güçlü olmak. Yapay zekâ araçlarının analist çalışma biçimini nasıl dönüştürdüğünü de yakından takip ediyorum. Hedef, karmaşık ortamlarda daha keskin ve güvenilir analiz.",
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
