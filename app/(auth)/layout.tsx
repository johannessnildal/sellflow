import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "SellFlow - Authenticate",
    description: "Create or log in to your SellFlow account.",
  };

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
      <main className='flex justify-center items-center min-h-screen bg-zinc-950'>
        {children}
      </main>
    )
  }
  
  export default AuthLayout