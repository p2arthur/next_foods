import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/meals';
import { MealItemInterface } from '@/components/meals/MealItem';

export default async function MealsPage() {
  const data = getMeals();
  console.log(data);

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
          <Link href='/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={data as MealItemInterface[]} />
      </main>
    </>
  );
}
