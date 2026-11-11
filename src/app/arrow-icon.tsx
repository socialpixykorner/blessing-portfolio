const paths = {
  "up-right": "M5 19 19 5M5 5h14v14",
  "down-right": "M5 5l14 14M5 19h14V5",
  left: "M20 12H4m7-7-7 7 7 7",
};

export function ArrowIcon({
  direction,
  size = 14,
  className,
}: {
  direction: keyof typeof paths;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
