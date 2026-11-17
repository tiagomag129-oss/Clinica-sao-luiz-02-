import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GlareHover } from "@/registry/magicui/glare-hover"
import { cn } from "@/lib/utils"

export interface PricingCardProps {
  title?: string
  badge?: string
  description?: string
  price?: string
  period?: string
  features?: string[]
  upcomingFeature?: string
  ctaLabel?: string
  ctaHref?: string
  highlighted?: boolean
  className?: string
}

export function PricingCard({
  title = "Pro",
  badge = "Popular",
  description = "For teams that need more.",
  price = "$49",
  period = "/mo",
  features = [
    "Unlimited projects",
    "Team collaboration",
    "Advanced analytics",
  ],
  upcomingFeature = "SSO (coming soon)",
  ctaLabel = "Get started",
  ctaHref,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <GlareHover
      className={cn("w-full rounded-2xl", className)}
      width="100%"
      background="transparent"
      color={highlighted ? "#14b8a6" : "#0d9488"}
      opacity={highlighted ? 0.22 : 0.14}
      duration={600}
    >
      <Card
        className={cn(
          "w-full h-full justify-between rounded-2xl bg-white py-6 shadow-xs transition-shadow duration-300 hover:shadow-md",
          highlighted
            ? "ring-2 ring-[#00A896] border-teal-200"
            : "ring-1 ring-slate-200/90"
        )}
      >
        <CardHeader className="px-6">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-xl font-bold text-[#083344]">
              {title}
            </CardTitle>
            {badge && (
              <Badge
                className={cn(
                  "px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider",
                  highlighted
                    ? "bg-[#00A896] text-white"
                    : "bg-teal-50 text-teal-800 border border-teal-200/70"
                )}
              >
                {badge}
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm text-slate-600">
            {description}
          </CardDescription>
          <div className="flex items-baseline gap-1.5 pt-3">
            <span className="text-3xl font-extrabold tracking-tight text-[#083344]">
              {price}
            </span>
            {period && (
              <span className="text-slate-500 text-xs font-medium">
                {period}
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5 px-6 flex-1">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2.5 text-sm text-slate-700 font-medium"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="shrink-0 text-[#00A896]"
                aria-hidden="true"
              >
                <path
                  d="M12.5 3.5L6 10L2.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{f}</span>
            </div>
          ))}
          {upcomingFeature && (
            <div className="text-slate-400 flex items-center gap-2.5 text-sm">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="shrink-0"
                aria-hidden="true"
              >
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="1.5"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
              <span>{upcomingFeature}</span>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-6 pt-4 pb-0 border-t border-slate-100 bg-transparent">
          {ctaHref ? (
            <Button
              className={cn(
                "w-full h-11 rounded-xl font-bold text-sm transition-all cursor-pointer",
                highlighted
                  ? "bg-[#00A896] hover:bg-[#009282] text-white shadow-sm"
                  : "bg-[#083344] hover:bg-teal-700 text-white"
              )}
              render={
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {ctaLabel}
            </Button>
          ) : (
            <Button
              className={cn(
                "w-full h-11 rounded-xl font-bold text-sm transition-all cursor-pointer",
                highlighted
                  ? "bg-[#00A896] hover:bg-[#009282] text-white shadow-sm"
                  : "bg-[#083344] hover:bg-teal-700 text-white"
              )}
            >
              {ctaLabel}
            </Button>
          )}
        </CardFooter>
      </Card>
    </GlareHover>
  )
}
