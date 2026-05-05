type AdSlotProps = {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
};

export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdSlotProps) {
  return (
    <div
      className={`ad-slot rounded-lg border border-dashed border-forest/25 bg-white/55 p-4 text-center text-xs text-forest/60 ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      aria-label="Spazio pubblicitario"
    >
      {/* Struttura pronta per Google AdSense. Inserire qui lo script reale dopo approvazione account. */}
      Spazio pubblicitario
    </div>
  );
}
