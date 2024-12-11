/* eslint-disable camelcase */
import { Bebas_Neue, Inter, Nunito } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

export const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})
