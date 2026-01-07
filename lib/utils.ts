import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get correct asset path
// Next.js basePath is automatically applied, so we just return the path as-is
export function getAssetPath(path: string): string {
  return path
}
