import MealItem, { MealItemInterface } from './MealItem';
import classes from './meals-grid.module.css';

interface MealsGridProps {
  meals: MealItemInterface[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
}
