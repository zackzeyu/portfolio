import * as React from 'react';

import s from './Greeting.scss';

interface IGreetingProps {
  children: string;
}

export const Greeting = ({ children }: IGreetingProps) => {
  const renderWords = () => {
    const words = children.split(' ');
    const { length } = words;

    return words.map((word, index) => (
      <span
        key={word}
        className={s(s.greeting, { isFirst: length > 1 && index === 0 })}
      >
        <span className={s.greeting__text}>
          {word}
          {index !== length - 1 && <span>&#32;</span>}
        </span>
        <span className={s.greeting__color} />
      </span>
    ));
  };

  return <>{renderWords()}</>;
};
