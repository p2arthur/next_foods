'use client';

interface ErrorFallbackInterface {
  error: Error;
}

export default function ErrorFallback({ error }: ErrorFallbackInterface) {
  return (
    <div className='error'>
      <h1>Error sending meal</h1>
      <p>Error saving your meal</p>
    </div>
  );
}
