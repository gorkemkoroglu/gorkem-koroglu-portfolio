import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-6">
            Görkem <span className="text-primary">Köroğlu</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4">
            Senior Business Analyst | Banking & Financial Technologies
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 font-light border-l-4 border-primary pl-4">
            "Turning complex systems into clear decisions."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#" className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              View Showcase
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>gorkem.koroglu@hotmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+90 553 386 00 59</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Istanbul, Turkey</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a href="https://linkedin.com/in/gorkemmkoroglu" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                linkedin.com/in/gorkemmkoroglu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
