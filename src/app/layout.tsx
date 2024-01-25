import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                children,
              }: {
                children: React.ReactNode
              }) {
                if (React.Children.count(children) == 1) {
                  console.log('Only one child')
                  
                }
                return (
                  <html lang="en">
                    <body className={inter.className}>{children}</body>
                  </html>
                )
              }
