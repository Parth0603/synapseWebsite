import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Classnames with tailwind-merge to prevent utility overrides
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
