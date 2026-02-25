import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(firstName: string, lastName: string) {
  if (!firstName && !lastName) return "";

  const firstInitial = firstName?.trim()?.charAt(0)?.toUpperCase() || "";
  const lastInitial = lastName?.trim()?.charAt(0)?.toUpperCase() || "";

  return `${firstInitial}${lastInitial}`;
}
