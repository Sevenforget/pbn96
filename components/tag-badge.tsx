import { cn } from "@/lib/utils"

interface TagBadgeProps {
  tag: string
  size?: "sm" | "md"
}

export function TagBadge({ tag, size = "md" }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-teal-100 text-teal-800 font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
      )}
    >
      {tag}
    </span>
  )
}
