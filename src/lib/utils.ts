import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "caption2",
        "caption1",
        "footnote",
        "subheadline",
        "headline",
        "body",
        "title3",
        "title2",
        "title1",
        "large-title",
        "display-tile",
        "display-card",
        "display-hero",
        "display-page",
        "section",
        "ghost",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
