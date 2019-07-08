import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import somewhere01 from '../assets/images/somewhere01.jpg';
import traversall01 from '../assets/images/traversall01.jpg';
import traversall02 from '../assets/images/traversall02.jpg';
import traversall03 from '../assets/images/traversall03.jpg';
import { SideColumn } from 'components/side-column/SideColumn';
import { Highlight } from 'components/intro/Highlight';
import { Greeting } from 'components/intro/Greeting';
import TextLoop from 'react-text-loop';
import Applications from 'components/applications/Applications';

const projectsList = [
  {
    photos: [traversall01, traversall02, traversall03],
    tags: 'JavaScript, React, GraphQL, Express, SQLite',
    projectName: 'TraversAll',
    description: 'Full-stack app replicating travel agency`s tour page',
    url: 'https://git.io/fj6Lc'
  },
  {
    tags: 'TypeScript, React Native Web, MobX, Firebase',
    projectName: 'Siam [In Progress]',
    description: 'Progress web + iOS gift exchange app',
    url: 'https://github.com/zackzeyu'
  },
  {
    photos: [somewhere01],
    tags: 'JavaScript, React, Google Maps, Dark Sky',
    projectName: 'Somewhere',
    description: 'Unconventional reverse weather search application ',
    url: 'https://git.io/fj6LW'
  },
  {
    tags: 'JavaScript, React, Fastify, PostgreSQL',
    projectName: 'CommentStarter',
    description: 'User comments for a high volume applications',
    url: 'https://git.io/fj6Ln'
  }
];

export default () => {
  const interval = 2000;

  return (
    <>
      <Helmet title="Home" />

      <Intro sideColumn={<SideColumn />}>
        <Greeting>// Hello.</Greeting> <br />
        <span>
          I'm Zack. Software Engineer. I build things with JavaScript.
        </span>
        <br />
        <Highlight>React</Highlight>
        <TextLoop interval={interval}>
          <Highlight>.js</Highlight>
          <Highlight>&nbsp;Native</Highlight>
          <Highlight>&nbsp;Native Web</Highlight>
          <Highlight>&nbsp;/ Redux</Highlight>
          <Highlight>&nbsp;/ MobX</Highlight>
          <Highlight>&nbsp;Hooks</Highlight>
          <Highlight>&nbsp;Spring</Highlight>
        </TextLoop>
        <br />
        <TextLoop interval={interval} delay={200}>
          <Highlight color={'rgba(78, 205, 196, 0.3)'}>Node.js</Highlight>
          <Highlight color={'rgba(78, 205, 196, 0.3)'}>Express</Highlight>
          <Highlight color={'rgba(78, 205, 196, 0.3)'}>MongoDB</Highlight>
        </TextLoop>
        <br />
        <TextLoop interval={interval} delay={400}>
          <Highlight color={'rgba(163, 155, 168, 0.3)'}>MyS</Highlight>
          <Highlight color={'rgba(163, 155, 168, 0.3)'}>PostgreS</Highlight>
          <Highlight color={'rgba(163, 155, 168, 0.3)'}>Graph</Highlight>
        </TextLoop>
        <Highlight color={'rgba(163, 155, 168, 0.3)'}>QL</Highlight>
      </Intro>
      <Applications projects={projectsList} />
    </>
  );
};
