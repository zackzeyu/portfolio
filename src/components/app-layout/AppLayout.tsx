import * as React from 'react';
import Helmet from 'react-helmet';

import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Linkedin from 'assets/svg/linkedin.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="apps" to="#applications" />

      <HeaderLink name="linkedin" to="http://linkedin.com/in/zackzeyu" />
      <HeaderLink name="github" to="https://github.com/zackzeyu" />
    </Header>

    {children}

    <Footer
      social={[
        { icon: <Github />, to: 'https://github.com/zackzeyu' },
        { icon: <Instagram />, to: 'https://www.instagram.com/zaggedzack' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/zackzeyu' }
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
