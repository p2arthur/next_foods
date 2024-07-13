'use client';

import { ChangeEvent, useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export interface ImagePickerPropsInterface {
  label: string;
  name: string;
}

export default function ImagePicker({
  label,
  name,
}: ImagePickerPropsInterface) {
  const imageInput = useRef<HTMLInputElement | null>();
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handlePickedImageCHange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const handlePickImage = () => {
    if (!imageInput.current) return;
    imageInput.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No images picked yet</p>
          ) : (
            <Image
              fill
              alt={'image selected by the user'}
              className={classes.image}
              src={pickedImage}
            />
          )}
        </div>{' '}
        <input
          className={classes.input}
          type='file'
          accept='image/png, image/jpeg'
          id={name}
          name={name}
          ref={imageInput}
          onChange={handlePickedImageCHange}
          required
        />
        <button
          onClick={handlePickImage}
          className={classes.button}
          type='button'
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
