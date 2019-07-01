import * as React from 'react';
import Helmet from 'react-helmet';
import Everest from '../assets/images/everest.jpg';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { Greeting } from 'components/intro/Greeting';
import { BlockText } from 'components/block-text/BlockText';
import TextLoop from 'react-text-loop';

const SideColumn = () => {
  return <img src={Everest} />;
};

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

      <BlockText
        heading="Who we are"
        description={
          <>
            Ueno is a full-service agency, busy designing and building beautiful
            digital products, brands, and experiences. For more informations go
            to{' '}
            <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
              ueno.co
            </a>
            .
          </>
        }
      />
    </>
  );
};
