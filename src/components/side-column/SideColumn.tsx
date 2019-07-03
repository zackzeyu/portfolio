import * as React from 'react';
import Everest from '../../assets/images/everest_cropped.jpg';
import s from './SideColumn.scss';

export const SideColumn = () => {
  return (
    <div className={s.sidecontainer}>
      <img src={Everest} />
    </div>
  );
};
