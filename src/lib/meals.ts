import sql from 'better-sqlite3';

//Create a connection with the sqlite database
const db = sql('meals.db');

export function getMeals() {
  const statement = db.prepare('SELECT * FROM meals;');
  console.log('statement', statement);
  const data = statement.all();
  return data;
}
