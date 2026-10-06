import { PlaceholderImage } from "@/components/PlaceholderImage";
import { imageForActivity } from "@/lib/images";
import type { Activity } from "@/lib/content";

export function EventCard({ activity }: { activity: Activity }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white">
      <PlaceholderImage
        src={imageForActivity(activity.location, activity.theme)}
        alt={`Placeholder scene for ${activity.title}`}
        caption={null}
        rounded={false}
        aspect="aspect-[16/8]"
      />
      <div className="p-6 md:p-7">
        <p className="text-sm text-muted">
          {activity.date}
          <span className="mx-2 text-line">·</span>
          {activity.location}
        </p>
        <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">
          {activity.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">{activity.summary}</p>
        <p className="mt-5 text-sm font-medium text-ink">Why it matters</p>
        <p className="mt-1.5 text-[15px] leading-7 text-muted">
          {activity.whyItMatters}
        </p>
      </div>
    </article>
  );
}
