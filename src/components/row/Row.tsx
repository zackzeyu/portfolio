import * as React from 'react';

import s from './Row.scss';

interface IRowProps {
  children: React.ReactNode;
  style?: Object;
}

export const Row = ({ children, style }: IRowProps) => (
  <div className={s.row} style={style}>
    {children}
  </div>
);
