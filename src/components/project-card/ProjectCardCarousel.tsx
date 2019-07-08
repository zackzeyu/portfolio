import React, { useState } from 'react';
import s from './ProjectCardCarousel.scss';

interface ICarouselProps {
  photos?: string[];
}

export default function ProjectCardCarousel({ photos }: ICarouselProps) {
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const rotateRight = () => {
    let n = photos.length;
    setCurrentPhoto((((currentPhoto + 1) % n) + n) % n);
  };

  const rotateLeft = () => {
    let n = photos.length;
    setCurrentPhoto((((currentPhoto - 1) % n) + n) % n);
  };

  return (
    <div className={s.carousel}>
      {photos &&
        photos.map((photo, i) => {
          return (
            <div
              key={i}
              className={
                s.carousel__item + (currentPhoto === i ? ` ${s.active}` : '')
              }
              style={{
                backgroundImage: `url(${photo})`
              }}
            />
          );
        })}

      {photos && photos.length > 1 && (
        <div
          className={s.toggle}
          style={{
            right: 0,
            borderRadius: '0 0.25rem 0 0'
          }}
          onClick={rotateLeft}
        >
          {'>'}
        </div>
      )}
      {photos && photos.length > 1 && (
        <div
          className={s.toggle}
          style={{
            left: 0,
            borderRadius: '0.25rem 0 0 0'
          }}
          onClick={rotateRight}
        >
          {'<'}
        </div>
      )}
    </div>
  );
}
