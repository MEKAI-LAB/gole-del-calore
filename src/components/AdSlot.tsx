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
      className={`ad-slot rounded-lg border border-sand/70 bg-[#f4efe6] p-6 text-center text-xs uppercase tracking-[0.18em] text-forest/45 ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      aria-label="Spazio pubblicitario"
    >
      {/* Struttura pronta per Google AdSense. Inserire qui lo script reale dopo approvazione account. */}
      Spazio pubblicitario
      <span className="block pt-1 normal-case tracking-normal">970x90</span>
    </div>
  );
}
