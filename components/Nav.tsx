'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Nav = () => {
  
  return (
    <nav className="mx-auto max-w-max">
      <ul className="flex space-x-4">
        <NavItem href="/" >Home</NavItem>
        <NavItem href="/about" >About</NavItem>
        <NavItem href="/todos" >Todos</NavItem>
      </ul>
    </nav>
  )
}

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <li>
      <Link href={href} className={cn(pathname === href ? `underline font-semibold` : ``)} >
        {children}
      </Link>
    </li>
  )
}

export default Nav