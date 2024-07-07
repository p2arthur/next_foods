interface MealPagePropsInterface {
  params: { mealSlug: string };
}

export default function MealPage({ params }: MealPagePropsInterface) {
  const { mealSlug } = params;

  return (
    <main>
      <h2>{mealSlug}</h2>
    </main>
  );
}
