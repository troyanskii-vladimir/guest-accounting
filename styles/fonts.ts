import { Open_Sans } from 'next/font/google'

export const openSansFont = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
})
