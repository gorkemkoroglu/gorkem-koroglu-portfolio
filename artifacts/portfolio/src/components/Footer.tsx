import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Copy, Check, Download } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EMAIL = "gorkem.koroglu@hotmail.com";

export function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* noop */ }
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="py-14 md:py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-heading mb-3">{f.heading}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">{f.cta}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3 md:gap-4 mb-10 md:mb-14"
        >
          {/* Email — split button: send + copy */}
          <div className="inline-flex rounded-lg overflow-hidden shadow-[0_0_0_1px_hsl(var(--primary)/0.0)] hover:shadow-[0_0_20px_rgba(0,200,200,0.2)] transition-shadow">
            <a
              href={`mailto:${EMAIL}`}
              aria-label={`${lang === "tr" ? "E-posta gönder" : "Send email"}: ${EMAIL}`}
              className="inline-flex items-center justify-center gap-2.5 h-11 px-4 md:px-5 bg-primary text-primary-foreground text-[13px] md:text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">{EMAIL}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? (lang === "tr" ? "Kopyalandı" : "Copied") : (lang === "tr" ? "E-postayı kopyala" : "Copy email")}
              className="inline-flex items-center justify-center gap-1.5 h-11 px-3 md:px-4 bg-primary/85 hover:bg-primary/70 text-primary-foreground text-xs font-semibold border-l border-primary-foreground/15 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === "tr" ? "Kopyalandı" : "Copied"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === "tr" ? "Kopyala" : "Copy"}</span>
                </>
              )}
            </button>
          </div>

          <a
            href="https://linkedin.com/in/gorkemmkoroglu"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center gap-2.5 h-11 px-4 md:px-6 rounded-lg border border-border bg-card text-[13px] md:text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
          >
            <Linkedin className="w-4 h-4 shrink-0" />
            <span className="truncate">linkedin.com/in/gorkemmkoroglu</span>
          </a>

          <a
            href="/Gorkem_Koroglu_CV.pdf"
            download="Gorkem_Koroglu_CV.pdf"
            aria-label={lang === "tr" ? "CV'yi indir (PDF)" : "Download CV (PDF)"}
            className="inline-flex items-center justify-center gap-2.5 h-11 px-4 md:px-6 rounded-lg border border-border bg-card text-[13px] md:text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{lang === "tr" ? "CV İndir (PDF)" : "Download CV (PDF)"}</span>
          </a>
        </motion.div>

        <div className="border-t border-border/40 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
          <div>
            <span className="font-heading font-bold text-base md:text-lg text-foreground">Görkem Köroğlu</span>
            <span className="text-primary">.</span>
            <p className="text-xs text-muted-foreground mt-0.5">{f.role}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Görkem Köroğlu. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
