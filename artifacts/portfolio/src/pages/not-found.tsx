import { Link } from "wouter";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLang();
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
          <AlertCircle className="h-7 w-7 text-primary" />
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">
          {lang === "tr" ? "Sayfa bulunamadı" : "Page not found"}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
          {lang === "tr"
            ? "Aradığın sayfa taşınmış ya da hiç var olmamış olabilir."
            : "The page you're looking for may have moved, or never existed."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,200,200,0.25)] transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {lang === "tr" ? "Ana sayfaya dön" : "Back to home"}
        </Link>
      </div>
    </div>
  );
}
