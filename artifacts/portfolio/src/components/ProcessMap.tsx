import { User, UserCheck, ShoppingCart, DollarSign, ArrowRight, AlertTriangle, Sparkles, type LucideIcon } from "lucide-react";

export interface ProcessLane {
  role: string;
  icon?: "requester" | "manager" | "procurement" | "finance";
  steps: string[];
}

export interface ProcessFlow {
  title: string;
  lanes: ProcessLane[];
  notes: string[];
  notesTitle: string;
}

export interface ProcessMapData {
  caption: string;
  asIs: ProcessFlow;
  toBe: ProcessFlow;
}

const ICONS: Record<NonNullable<ProcessLane["icon"]>, LucideIcon> = {
  requester: User,
  manager: UserCheck,
  procurement: ShoppingCart,
  finance: DollarSign,
};

function Lane({
  lane,
  variant,
}: {
  lane: ProcessLane;
  variant: "asis" | "tobe";
}) {
  const Icon = lane.icon ? ICONS[lane.icon] : User;
  const stepClasses =
    variant === "asis"
      ? "bg-amber-500/8 border-amber-500/30 text-foreground/85"
      : "bg-emerald-500/8 border-emerald-500/30 text-foreground/90";
  const arrowClass = variant === "asis" ? "text-amber-500/50" : "text-emerald-500/60";

  return (
    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-3 md:gap-4 items-start py-3 border-b border-border/30 last:border-b-0">
      {/* Role label */}
      <div className="flex items-center gap-2 pt-2 sticky left-0">
        <div className="w-7 h-7 rounded-md bg-card border border-border/60 flex items-center justify-center text-muted-foreground shrink-0">
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-[11px] md:text-xs font-semibold text-foreground/85 leading-tight">
          {lane.role}
        </span>
      </div>

      {/* Steps row — horizontal scroll on mobile */}
      <div className="overflow-x-auto -mx-1 px-1 scrollbar-hide">
        <div className="flex items-stretch gap-2 min-w-max">
          {lane.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`rounded-md border px-2.5 py-2 text-[11px] md:text-xs leading-snug max-w-[150px] md:max-w-[180px] ${stepClasses}`}
              >
                {step}
              </div>
              {i < lane.steps.length - 1 && (
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${arrowClass}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowBlock({
  flow,
  variant,
}: {
  flow: ProcessFlow;
  variant: "asis" | "tobe";
}) {
  const headerClasses =
    variant === "asis"
      ? "bg-amber-500/12 border-amber-500/30 text-amber-300"
      : "bg-emerald-500/12 border-emerald-500/30 text-emerald-300";
  const notesClasses =
    variant === "asis"
      ? "border-amber-500/25 bg-amber-500/5"
      : "border-emerald-500/25 bg-emerald-500/5";
  const NoteIcon = variant === "asis" ? AlertTriangle : Sparkles;
  const noteIconColor = variant === "asis" ? "text-amber-400" : "text-emerald-400";

  return (
    <div className="rounded-xl border border-border/60 bg-background overflow-hidden">
      <div className={`border-b px-4 md:px-5 py-2.5 text-center text-xs md:text-sm font-semibold tracking-wide ${headerClasses}`}>
        {flow.title}
      </div>

      <div className="grid lg:grid-cols-[1fr_240px] gap-0">
        {/* Lanes */}
        <div className="p-3 md:p-4 lg:border-r border-border/30">
          {flow.lanes.map((lane, i) => (
            <Lane key={i} lane={lane} variant={variant} />
          ))}
        </div>

        {/* Notes panel */}
        <div className={`border-t lg:border-t-0 p-4 ${notesClasses}`}>
          <div className="flex items-center gap-2 mb-3">
            <NoteIcon className={`w-3.5 h-3.5 ${noteIconColor}`} />
            <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-foreground/85">
              {flow.notesTitle}
            </h4>
          </div>
          <ul className="space-y-2">
            {flow.notes.map((n, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] md:text-xs text-foreground/75 leading-relaxed">
                <span className={`w-1 h-1 rounded-full shrink-0 mt-[0.55rem] ${variant === "asis" ? "bg-amber-400/70" : "bg-emerald-400/70"}`} />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProcessMap({ data }: { data: ProcessMapData }) {
  return (
    <div className="space-y-5">
      {data.caption && (
        <p className="text-xs md:text-sm text-muted-foreground italic text-center">
          {data.caption}
        </p>
      )}
      <FlowBlock flow={data.asIs} variant="asis" />
      <FlowBlock flow={data.toBe} variant="tobe" />
    </div>
  );
}
