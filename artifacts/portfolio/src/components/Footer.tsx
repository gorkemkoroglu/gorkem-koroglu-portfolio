import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h2 className="font-heading font-bold text-2xl tracking-tight text-foreground">
              Görkem Köroğlu<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-1">{f.role}</p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:gorkem.koroglu@hotmail.com"
              data-testid="link-email"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gorkemmkoroglu"
              target="_blank"
              rel="noreferrer"
              data-testid="link-linkedin"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="tel:+905533860059"
              data-testid="link-phone"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Görkem Köroğlu. {f.rights}
        </div>
      </div>
    </footer>
  );
}
