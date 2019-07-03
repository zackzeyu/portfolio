import React from 'react';
import s from './FlexBox.scss';

interface IContainerProps {
  children: React.ReactNode;
}

export const FlexBox = ({ children }: IContainerProps) => {
  return <section className={s.flexbox}>{children}</section>;
};
