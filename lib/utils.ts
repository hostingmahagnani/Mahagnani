import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get correct asset path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/Mahagnani' : ''

export function getAssetPath(path: string): string {
  // If path already starts with http or https, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
