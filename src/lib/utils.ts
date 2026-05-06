import { clsx, type ClassValue } from 'clsx'
import slugifyLib from 'slugify'
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function slugify(text: string): string {
  return slugifyLib(text, { lower: true, strict: true })
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMMM d, yyyy')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
