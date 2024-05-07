import { Onest } from 'next/font/google'

export const onestFont = Onest({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
  style: ['normal'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
})
