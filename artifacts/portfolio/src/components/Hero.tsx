import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {h.badge}
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight text-foreground mb-4 leading-[1.05]">
              {h.name.split(" ")[0]}{" "}
              <span className="text-primary">{h.name.split(" ")[1]}</span>
            </h1>

            {/* Title */}
            <div className="mb-3">
              <span className="text-2xl md:text-3xl font-semibold text-foreground/90">{h.title}</span>
              <span className="text-2xl md:text-3xl font-light text-muted-foreground"> · {h.subtitle}</span>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed border-l-2 border-primary/60 pl-4 font-light">
              {h.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,200,200,0.25)] active:scale-[0.98]"
              >
                <Download className="mr-2 h-4 w-4" />
                {h.downloadCV}
              </a>
              <button
                onClick={() => document.querySelector("#showcase")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border bg-card/60 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all active:scale-[0.98]"
              >
                {h.viewShowcase}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="mailto:gorkem.koroglu@hotmail.com"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border bg-transparent text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-border/80 transition-all"
              >
                {h.contact}
              </a>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {h.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-card border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <a href="mailto:gorkem.koroglu@hotmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                gorkem.koroglu@hotmail.com
              </a>
              <a href="tel:+905533860059" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +90 553 386 00 59
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {h.location}
              </span>
              <a
                href="https://linkedin.com/in/gorkemmkoroglu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/gorkemmkoroglu
              </a>
            </div>
          </motion.div>

          {/* Right side decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="w-64 bg-card/60 border border-border/60 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-4">profile.json</div>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-primary">"role"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground/80">"Senior BA"</span>
                </div>
                <div>
                  <span className="text-primary">"domain"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground/80">"Banking & Fintech"</span>
                </div>
                <div>
                  <span className="text-primary">"focus"</span>
                  <span className="text-muted-foreground">: [</span>
                  <div className="pl-3 text-foreground/70 space-y-0.5">
                    <div>"Systems Analysis",</div>
                    <div>"API Integration",</div>
                    <div>"Cross-Border PMT",</div>
                    <div>"UAT & Testing"</div>
                  </div>
                  <span className="text-muted-foreground">]</span>
                </div>
                <div>
                  <span className="text-primary">"available"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-400">true</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
