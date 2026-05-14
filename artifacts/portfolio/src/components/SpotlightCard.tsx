import { forwardRef, useCallback, type CSSProperties, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  size?: number;
  color?: string;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
}

export const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(function SpotlightCard(
  { children, className = "", style, onClick, onKeyDown, size = 320, color = "rgba(0, 210, 200, 0.10)", role, tabIndex, ariaLabel },
  ref,
) {
  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      style={
        {
          ...style,
          "--spot-size": `${size}px`,
          "--spot-color": color,
        } as CSSProperties
      }
      className={`spotlight-card relative ${className}`}
    >
      {children}
    </div>
  );
});
