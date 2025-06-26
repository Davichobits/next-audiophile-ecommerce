import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  image: string;
  link: string;
  width: number;
}

export const Category = ({ name, image, link, width }: Props) => {
  return (
    <div className='bg-Gray w-[327px] h-[165px] rounded-lg relative'>
      <div className='absolute top-[-55px] w-full grid place-items-center h-[150px] overflow-hidden'>
        <Image src={image} alt={name} width={width} height={133} />
      </div>
      <h2 className='text-center mt-20 uppercase font-bold text-[.9375rem] text-Dark-Gray'>{name}</h2>
      <Link className='block w-[60px] m-auto' href={link}>
        <div className='flex place-content-center items-center gap-[13px]'>
          <p className='uppercase text-[.8125rem] font-bold text-Dark-Gray/50'>Shop</p>
          <Image src='/assets/shared/desktop/icon-arrow-right.svg' alt='right-icon' width={5} height={10}></Image>
        </div>
      </Link>
    </div>
  )
}
