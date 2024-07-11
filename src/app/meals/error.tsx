'use client';

interface ErrorFallbackInterface {
  error: Error;
}

export default function ErrorFallback({ error }: ErrorFallbackInterface) {
  return (
    <div className='error'>
      <h1>Error loading...</h1>
      <p>{error.message}</p>
    </div>
  );
}
