import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface MealPagePropsInterface {
  params: { mealSlug: string };
}

export default async function MealPage({ params }: MealPagePropsInterface) {
  const { mealSlug } = params;

  console.log('meal slug', mealSlug);

  const data = await getMeal(mealSlug);

  if (!data) notFound();

  data.instructions = data.instructions.replace(/\n/g, '<br/>');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          {
            <Image
              fill
              src={data.image}
              alt={data.title}
            />
          }
        </div>
        <div className={classes.headerText}>
          <h1>{data.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${data.creator_email}`}>{data.creator}</a>
          </p>
          <p className={classes.summary}>SUMARY</p>
          <p>{data.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: `${data.instructions}` }}
        ></p>
      </main>
    </>
  );
}
