import * as React from 'react';

import { Container } from 'components/container/Container';
import { Link } from 'components/link/Link';

import ZackLogo from 'assets/svg/zack-logo.svg';
import s from './Footer.scss';

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  social: ISocial[];
}

export const Footer = ({ social }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <Link to="/" className={s.footer__content__logo}>
          <ZackLogo className={s.footer__content__logoSvg} />
        </Link>

        <ul className={s.footer__list}>
          {social.map(item => (
            <li key={item.to} className={s.footer__item}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);
