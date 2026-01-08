import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get correct asset path for GitHub Pages
// In production, we need to add the basePath prefix manually for <img> tags
// (Next.js Image component handles this automatically, but raw <img> tags don't)
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/Mahagnani' : ''
  return `${basePath}${path}`
}
