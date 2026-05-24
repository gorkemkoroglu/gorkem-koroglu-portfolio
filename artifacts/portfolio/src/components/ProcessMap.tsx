import {
  User,
  UserCheck,
  ShoppingCart,
  DollarSign,
  ChevronRight,
  AlertTriangle,
  Sparkles,
  PlayCircle,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

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

type Variant = "asis" | "tobe";

const variantStyles = {
  asis: {
    header: "bg-amber-500/15 border-amber-500/35 text-amber-300",
    stepBox: "bg-amber-500/[0.06] border-amber-500/35 hover:border-amber-500/55",
    stepNum: "bg-amber-500/20 border-amber-500/50 text-amber-300",
    arrow: "text-amber-500/55",
    laneStripe: "bg-amber-500/[0.015]",
    notesPanel: "border-amber-500/30 bg-amber-500/[0.06]",
    notesAccent: "text-amber-400",
    notesBullet: "bg-amber-400/70",
    startPill: "bg-amber-500/15 border-amber-500/40 text-amber-300",
    endPill: "bg-rose-500/15 border-rose-500/35 text-rose-300",
  },
  tobe: {
    header: "bg-emerald-500/15 border-emerald-500/35 text-emerald-300",
    stepBox: "bg-emerald-500/[0.06] border-emerald-500/35 hover:border-emerald-500/55",
    stepNum: "bg-emerald-500/20 border-emerald-500/50 text-emerald-300",
    arrow: "text-emerald-500/65",
    laneStripe: "bg-emerald-500/[0.015]",
    notesPanel: "border-emerald-500/30 bg-emerald-500/[0.06]",
    notesAccent: "text-emerald-400",
    notesBullet: "bg-emerald-400/70",
    startPill: "bg-primary/15 border-primary/40 text-primary",
    endPill: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300",
  },
} as const;

function StepBox({
  step,
  num,
  variant,
}: {
  step: string;
  num: number;
  variant: Variant;
}) {
  const s = variantStyles[variant];
  return (
    <div
      className={`relative rounded-lg border px-2.5 py-2 pl-6 md:px-3 md:py-2.5 md:pl-7 text-[10.5px] md:text-xs leading-snug min-w-[124px] max-w-[150px] md:min-w-[160px] md:max-w-[190px] transition-colors ${s.stepBox}`}
    >
      <span
        className={`absolute top-1.5 left-1.5 w-4 h-4 rounded-full border flex items-center justify-center text-[9px] font-mono font-bold ${s.stepNum}`}
      >
        {num}
      </span>
      <span className="text-foreground/90">{step}</span>
    </div>
  );
}

function Pill({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon: LucideIcon;
  className: string;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11px] md:text-xs font-semibold tracking-wide shrink-0 ${className}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  );
}

function Lane({
  lane,
  variant,
  laneIndex,
  startNum,
  isFirstLane,
  isLastLane,
  labels,
}: {
  lane: ProcessLane;
  variant: Variant;
  laneIndex: number;
  startNum: number;
  isFirstLane: boolean;
  isLastLane: boolean;
  labels: { start: string; end: string };
}) {
  const s = variantStyles[variant];
  const Icon = lane.icon ? ICONS[lane.icon] : User;
  const stripe = laneIndex % 2 === 1 ? s.laneStripe : "";

  return (
    <div
      className={`grid grid-cols-[88px_1fr] md:grid-cols-[150px_1fr] border-b border-border/30 last:border-b-0 ${stripe}`}
    >
      {/* Role sidebar */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2 px-1.5 md:px-3 py-3 md:py-4 border-r border-border/40 bg-card/30 text-center md:text-left">
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-background border border-border/60 flex items-center justify-center text-muted-foreground shrink-0">
          <Icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
        </div>
        <span className="text-[10px] md:text-xs font-semibold text-foreground/90 leading-tight">
          {lane.role}
        </span>
      </div>

      {/* Steps row */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 md:gap-2.5 min-w-max px-3 py-4">
          {isFirstLane && (
            <>
              <Pill label={labels.start} icon={PlayCircle} className={s.startPill} />
              <ChevronRight className={`w-4 h-4 shrink-0 ${s.arrow}`} />
            </>
          )}

          {lane.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-2.5">
              <StepBox step={step} num={startNum + i} variant={variant} />
              {i < lane.steps.length - 1 && (
                <ChevronRight className={`w-4 h-4 shrink-0 ${s.arrow}`} />
              )}
            </div>
          ))}

          {isLastLane && (
            <>
              <ChevronRight className={`w-4 h-4 shrink-0 ${s.arrow}`} />
              <Pill label={labels.end} icon={CheckCircle2} className={s.endPill} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FlowBlock({
  flow,
  variant,
  labels,
}: {
  flow: ProcessFlow;
  variant: Variant;
  labels: { start: string; end: string };
}) {
  const s = variantStyles[variant];
  const NoteIcon = variant === "asis" ? AlertTriangle : Sparkles;

  // Compute starting global step number per lane
  let running = 1;
  const laneStarts = flow.lanes.map((lane) => {
    const start = running;
    running += lane.steps.length;
    return start;
  });

  return (
    <div className="rounded-xl border border-border/60 bg-background overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
      {/* Header bar */}
      <div className={`border-b px-4 md:px-5 py-3 text-center text-xs md:text-sm font-bold tracking-wider uppercase ${s.header}`}>
        {flow.title}
      </div>

      <div className="grid lg:grid-cols-[1fr_260px]">
        {/* Swim lanes */}
        <div className="lg:border-r border-border/40">
          {flow.lanes.map((lane, i) => (
            <Lane
              key={i}
              lane={lane}
              variant={variant}
              laneIndex={i}
              startNum={laneStarts[i]}
              isFirstLane={i === 0}
              isLastLane={i === flow.lanes.length - 1}
              labels={labels}
            />
          ))}
        </div>

        {/* Notes panel */}
        <div className={`border-t lg:border-t-0 p-4 md:p-5 ${s.notesPanel}`}>
          <div className="flex items-center gap-2 mb-3">
            <NoteIcon className={`w-4 h-4 ${s.notesAccent}`} />
            <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-foreground/90">
              {flow.notesTitle}
            </h4>
          </div>
          <ul className="space-y-2.5">
            {flow.notes.map((n, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[12px] md:text-[13px] text-foreground/80 leading-relaxed"
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-[0.5rem] ${s.notesBullet}`} />
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
  // i18n: detect from the AS-IS title (cheap heuristic — covers both EN and TR cases)
  const isTr = /Mevcut/i.test(data.asIs.title);
  const labels = {
    start: isTr ? "Başlangıç" : "Start",
    end: isTr ? "Bitiş" : "End",
    scrollHint: isTr ? "Yatay kaydırın" : "Scroll horizontally",
  };

  return (
    <div className="space-y-5">
      {data.caption && (
        <p className="text-xs md:text-sm text-muted-foreground italic text-center">
          {data.caption}
        </p>
      )}

      <FlowBlock flow={data.asIs} variant="asis" labels={labels} />

      {/* Transition arrow between AS-IS and TO-BE */}
      <div className="flex items-center justify-center gap-2 py-1">
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary/70">
          {isTr ? "Yeniden Tasarım" : "Redesign"}
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      <FlowBlock flow={data.toBe} variant="tobe" labels={labels} />

      {/* Mobile scroll hint */}
      <p className="lg:hidden text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 text-center">
        ← {labels.scrollHint} →
      </p>
    </div>
  );
}
