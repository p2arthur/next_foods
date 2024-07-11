interface MealNotFoundInterfaceProps {
  params: { mealSlug: string };
}

export default function MealNotFound({ params }: MealNotFoundInterfaceProps) {
  return (
    <main className='not-found'>
      <h1>Given meal Not found</h1>
      <p>We couldn't find the requested meal</p>
    </main>
  );
}
