'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './navlink.module.css';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: any;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.includes(href) ? `${classes.active} ${classes.link}` : classes.link
      }
    >
      {children}
    </Link>
  );
}
