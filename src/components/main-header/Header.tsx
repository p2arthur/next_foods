import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';

export default function MainHeader() {
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
              <Link href='/meals'>Browse meals</Link>
            </li>
            <li>
              <Link href='/community'>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
