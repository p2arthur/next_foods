'use server';

import { redirect } from 'next/navigation';
import { MealInterface, saveMeal } from '../meals';

export interface ShareMealResponseInterface {
  message: null | string;
  status: null | 'fail' | 'submitting' | 'submited';
}

export async function shareMeal(_, formData: FormData) {
  const responseObject: ShareMealResponseInterface = {
    message: null,
    status: null,
  };

  const title = formData.get('title');
  const name = formData.get('name');
  const email = formData.get('email');
  const summary = formData.get('summary');
  const instructions = formData.get('instructions');
  const image = formData.get('image');

  const isValidText = (text: string) => {
    return text && text !== '' && true;
  };

  const slug = title?.toString().split(' ').join('-').toLowerCase();

  const meal = {
    creator_email: email,
    summary,
    instructions,
    creator: name,
    slug,
    title,
    image,
  } as MealInterface;

  const isFormDataValid =
    isValidText(meal.title) &&
    isValidText(meal.creator) &&
    isValidText(meal.summary) &&
    isValidText(meal.creator) &&
    meal.creator_email.includes('@') &&
    meal.image &&
    meal.image.size !== 0;

  if (!isFormDataValid) {
    responseObject.message = 'invalid field';
    responseObject.status = 'fail';
  }

  responseObject.message = 'Submitting...';
  responseObject.status = 'submitting';

  const data = await saveMeal(meal);

  responseObject.message = 'Form submitted';
  responseObject.status = 'submited';
  return { message: 'Form submitted', status: 'submited' };
}
