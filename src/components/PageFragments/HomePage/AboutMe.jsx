import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello!! My name is Matt Bordas. My pronouns are he/him/his. I'm a computational biologist focused on solving
    problems related to aging. I'm currently working with the Amaral Lab (amaral.northwestern.edu) of Northwestern University 🧬 
    I'm very interested in CRISPR, mRNA, and ADCs.`,
  paraTwo: `My background is in computer science and full stack software engineering. I'm comfortable
  building tools, apps, and products from the ground up, end-to-end. I'm a co-founder and was a lead 
  engineer at Time by Ping (timebyping.com). I'm looking to bring my ability to create, lead, and execute to the biotech
  industry.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
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
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
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
            textH4="Computational Biology"
            textH3="My Work and Passion"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="code2040.png"
            textH4="Allyship"
            textH3="Diversity with Code2040"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="trading.svg"
            textH4="Trading"
            textH3="My Side Project"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="exercise.svg"
            textH4="Exercise"
            textH3="My Morning Coffee"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meditation.svg"
            textH4="Meditation"
            textH3="Inner Peace and Mindfulness"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
