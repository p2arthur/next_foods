import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/meals';
import { MealItemInterface } from '@/components/meals/MealItem';
import { Suspense } from 'react';

async function Meals() {
  const data = await getMeals();
  return <MealsGrid meals={data as MealItemInterface[]} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{' '}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
