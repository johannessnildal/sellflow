import Footer from '@/components/footer';
import Header from '@/components/header';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "SellFlow - Legal",
    description: "Automation and smart solutions for small-scale sellers with seamless scaling.",
  };

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
      <main>
        <Header />
          {children}
        <Footer />
      </main>
    )
  }
  
  export default RootLayout