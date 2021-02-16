import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi!! 👋 I'm Matt Bordas. I'm currently working as a computational biologist at the 
  Amaral Lab of Northwestern University (amaral.northwestern.edu). I'm leveraging my experience as a software engineer to analyze, 
  model, and understand omics and other biology data.`,
  paraTwo: `I have a bachelor’s in computer science and four years of industry experience in full 
  stack software engineering at a startup I co-founded (timebyping.com). I’ve worked with a myriad of technologies, obtaining proficiencies in Python, 
  Pandas, Jupyter Notebooks, Flask, ReactJS, NodeJS, DevOps, data analysis, cloud computing, and cloud architecture.`,
};

const AboutMe = () => {
  const description = '';//`${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Matt', 'Bordas', 'Computational Biology', 'Amaral Lab', 'Time by Ping', 'Python', 'NodeJS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        {/* <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} /> */}
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="golden-gate.svg"
            height={60}
            textH4="Currently Living In"
            textH3="Oakland, CA"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="comp-bio.svg"
            textH4="My Work and Passion"
            textH3="Computational Biology"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="cuba.svg"
            textH4="First Generation"
            textH3="Cuban-American"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="code2040.png"
            textH4="Community and Allyship"
            textH3="Code2040.org"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meditation.svg"
            textH4="Inner Peace and Mindfulness"
            textH3="Meditation"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="trading.svg"
            textH4="My Side Project"
            textH3="Trading"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
