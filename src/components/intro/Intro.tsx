import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Intro.scss';

interface IIntroProps {
  children: React.ReactNode;
  sideColumn?: React.ReactNode;
}

export const Intro = ({ children, sideColumn }: IIntroProps) => {
  return (
    <Container>
      <div className={s.intro}>
        <Row>
          <div className={s.intro__col}>
            <div className={s.intro__text}>{children}</div>
          </div>
          <div className={s.intro__col__right}>{sideColumn}</div>
        </Row>
      </div>
    </Container>
  );
};
