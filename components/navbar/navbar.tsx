'use client'
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../../components";
import { useState } from "react";

interface INavItems {
  path: string;
  text: string;
}

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
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          <Image
              className="sm:hidden"
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        <Link href={'/'}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        {
          isOpen && (
            <div className="sm:hidden absolute top-13 left-0 right-0 bg-black p-4">
              <ul className="flex flex-col gap-4">
                {navItems.map(item => (
                  <li key={item.path}>
                    <ActiveLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
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