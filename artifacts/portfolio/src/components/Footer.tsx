import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer id="contact" className="py-20 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">{f.heading}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">{f.cta}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-14"
        >
          <a
            href="mailto:gorkem.koroglu@hotmail.com"
            className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,200,200,0.2)]"
          >
            <Mail className="w-4 h-4" />
            gorkem.koroglu@hotmail.com
          </a>
          <a
            href="https://linkedin.com/in/gorkemmkoroglu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-lg border border-border bg-card text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
          >
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/gorkemmkoroglu
          </a>
          <a
            href="tel:+905533860059"
            className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-lg border border-border bg-card text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
          >
            <Phone className="w-4 h-4" />
            +90 553 386 00 59
          </a>
        </motion.div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-heading font-bold text-lg text-foreground">Görkem Köroğlu</span>
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
