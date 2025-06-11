import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className=" bg-black">
      <div className="max-w-[1110px] flex justify-between items-center p-4 text-white m-auto">
        <Image
            className="sm:hidden"
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        <Link href={'/'}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        <ul className="hidden sm:flex sm:gap-[34px]">
          {navItems.map(item => (
            <li key={item.path}>
              <Link className="uppercase" href={item.path}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
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