import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => {
      dotRef.current?.classList.remove("opacity-0");
      ringRef.current?.classList.remove("opacity-0");
    };
    const onMouseLeave = () => {
      dotRef.current?.classList.add("opacity-0");
      ringRef.current?.classList.add("opacity-0");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="opacity-0 pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary transition-opacity duration-300"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="opacity-0 pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-primary/50 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
