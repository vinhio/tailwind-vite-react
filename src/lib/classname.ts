import {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

/**
 * Classname function to manipulate
 *
 * @param args ClassValue[]
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
