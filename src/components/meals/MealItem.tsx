import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export interface MealItemInterface {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

interface MealItemProps {
  meal: MealItemInterface;
}

export default function MealItem({ meal }: MealItemProps) {
  console.log(meal.image); // Log the image path to check if it's correct

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{meal.title}</h2>
          <p>by {meal.creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{meal.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meal.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
