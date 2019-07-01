import * as React from 'react';

import s from './Highlight.scss';

interface IHighlightProps {
  children: string;
  color?: string;
}

export const Highlight = ({ children, color }: IHighlightProps) => {
  const renderWords = () => {
    const words = children.split(' ');
    const { length } = words;
    const highlightColor = {
      backgroundColor: color || 'rgba(255, 107, 107, 0.3)'
    };

    return words.map((word, index) => (
      <span
        key={word}
        className={s(s.highlight, { isFirst: length > 1 && index === 0 })}
      >
        <span className={s.highlight__text}>{word}</span>
        <span className={s.highlight__color} style={highlightColor} />
      </span>
    ));
  };

  return <>{renderWords()}</>;
};
