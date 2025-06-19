'use client'
import Image from "next/image";
import Link from "next/link";
import { ActiveLink, HamburgerButton, FloatingNabvar } from "..";
import { useState } from "react";
import { INavItems } from "@/app/types/types";

const navItems: INavItems[] = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/headphones',
    text: 'Headphones'
  },
  {
    path: '/speakers',
    text: 'Speakers'
  },
  {
    path: '/earphones',
    text: 'Earphones'
  }
]

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-black">
      <div className="max-w-[1110px] flex justify-between items-center p-4 text-white m-auto">
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <Link href={'/'}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        <ul className="hidden lg:flex gap-4">
          {navItems.map(item => (
            <li key={item.path}>
              <ActiveLink {...item} />
            </li>
          ))}
        </ul>
        {
          isOpen && (
            <FloatingNabvar navItems={navItems} setIsOpen={setIsOpen}  />
          )
        }
        <Link href={'/cart'}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </nav>
  )
}