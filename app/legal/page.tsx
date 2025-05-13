'use client';
import React from 'react'
import { motion } from 'framer-motion';

const LegalPage = () => {
  return (
    <main className='max-w-[26rem] md:max-w-[34rem] mx-auto'>
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
            className="mb-12 text-center"
        >
            <div className='flex flex-col items-center justify-center text-center my-10 gap-4 pt-10 sm:pt-16'>
                <h1 className='text-5xl font-bold'>SellFlow | Legal</h1>
                <p className='text-lg text-zinc-400'>All needed information to give an understanding of our services, data processing, your rights and restrictions, and contact possibilities.</p>
            </div>
        </motion.section>
        
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
            className="pb-30 sm:pb-40 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 mb-6 pt-10 sm:pt-16">
              External Resources
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mb-4 max-w-[32rem] mx-auto">
              Explore external authorities and platforms for additional legal guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  title: 'EU Online Dispute Resolution',
                  href: 'http://ec.europa.eu/odr',
                },
                {
                  title: 'Norwegian Consumer Authority',
                  href: 'https://www.forbrukerradet.no',
                },
                {
                  title: 'Norwegian Data Protection Authority',
                  href: 'https://www.datatilsynet.no',
                },
                {
                  title: 'EU Web Accessibility Directive',
                  href: 'https://eur-lex.europa.eu/eli/dir/2016/2102/oj',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 text-sm hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.section>
    </main>
  )
}

export default LegalPage