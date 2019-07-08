import * as React from 'react';
import Helmet from 'react-helmet';
import Fade from 'react-reveal/Fade';

import { Intro } from 'components/intro/Intro';
import somewhere01 from '../assets/images/somewhere01.jpg';
import traversall01 from '../assets/images/traversall01.jpg';
import traversall02 from '../assets/images/traversall02.jpg';
import traversall03 from '../assets/images/traversall03.jpg';
import { SideColumn } from 'components/side-column/SideColumn';
import { Highlight } from 'components/intro/Highlight';
import { Greeting } from 'components/intro/Greeting';
// import { BlockText } from 'components/block-text/BlockText';
import { ProjectCard } from 'components/project-card/ProjectCard';
import { FlexBox } from 'components/flexbox/FlexBox';
import TextLoop from 'react-text-loop';

const dummyPhotos = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/255/200/300'
];

const projectsList = [
  {
    photos: [traversall01, traversall02, traversall03],
    tags: 'JavaScript, React, GraphQL, Express, SQLite',
    projectName: 'TraversAll',
    description: 'Full-stack app replicating travel agency`s tour page',
    url: 'https://git.io/fj6Lc'
  },
  {
    photos: dummyPhotos,
    tags: 'TypeScript, React Native Web, MobX, Firebase',
    projectName: 'Siam',
    description: 'Progress web + iOS gift exchange app',
    url: 'https://tbu'
  },
  {
    photos: [somewhere01],
    tags: 'JavaScript, React, Google Maps, Dark Sky',
    projectName: 'Somewhere',
    description: 'Unconventional reverse weather search application ',
    url: 'https://git.io/fj6LW'
  },
  {
    photos: dummyPhotos,
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
          I'm Zack. Software Engineer. I know a bit of JavaScript
          <sup style={{ fontSize: 12 }}>&nbsp;and TypeScript</sup>
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
      <FlexBox>
        <Fade bottom fraction={0.35}>
          {projectsList.map(project => (
            <ProjectCard key={project.projectName} {...project} />
          ))}
        </Fade>
      </FlexBox>
    </>
  );
};
