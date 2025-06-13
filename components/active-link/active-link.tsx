"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  path: string,
  text: string
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <Link className={`uppercase hover:text-Orange ${isActive && 'text-Orange'}`} href={path}>
      {text}
    </Link>
  )
}
