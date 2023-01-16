import React from 'react';
import Link from 'next/link';

interface IPlayBoxProps {
    title: string;
    see: any;
}

export default function PlayBox({title ,see}: IPlayBoxProps) {
  return (
      <section>
          <header className='flex justify-between'>
            <h3 className='text-2xl text-white font-bold hover:underline tracking-tight'>{title}</h3>
            {see && (
                <Link className={'text-link text-[12px] font-semibold tracking-widest bottom-0'} href={see}>
                   Play
                </Link>
            )}
          </header>
 
      </section>
      
  )
}