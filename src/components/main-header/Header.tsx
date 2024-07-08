'use client';

import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';
import { useParams, usePathname } from 'next/navigation';
import NavLink from './NavLink';

export default function MainHeader() {
  const path = usePathname();

  console.log(path);

  return (
    <>
      {' '}
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link
          className={classes.logo}
          href='/'
        >
          <Image
            priority
            src={logoImg}
            alt='A plate with food'
          />
          <h3>NextLevel FOod</h3>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
