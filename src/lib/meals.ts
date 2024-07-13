import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

export interface MealInterface {
  creator_email: string;
  summary: string;
  instructions: string;
  creator: string;
  slug: string;
  title: string;
  image: File;
}

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

export async function saveMeal(meal: MealInterface) {
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const slug = slugify(meal.slug, { lower: true });
  const instructions = xss(meal.instructions);
  const imagePath = `/images/${fileName}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Saving image failed');
  });

  const statement = db.prepare(`
    INSERT INTO meals
      (creator, title, summary, instructions, slug, image, creator_email)
    VALUES
      (@creator, @title, @summary, @instructions, @slug, @image, @creator_email)
     `);

  const objectToSave = {
    title: meal.title,
    creator: meal.creator,
    creator_email: meal.creator_email,
    summary: meal.summary,
    slug,
    instructions,
    image: imagePath,
  };

  statement.run(objectToSave);
}
