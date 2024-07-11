import sql from 'better-sqlite3';

//Create a connection with the sqlite database
const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const statement = db.prepare('SELECT * FROM meals;');
  console.log('statement', statement);
  const data = statement.all();
  return data;
}

export async function getMeal(mealSlug: string) {
  const statement = db.prepare(`SELECT * FROM meals WHERE slug = ?`);
  const data = statement.get(mealSlug);
  console.log('data', data);
  return data;
}
