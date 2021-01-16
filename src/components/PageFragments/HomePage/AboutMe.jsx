import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello!! My name is Matt Bordas. My pronouns are he/him/his. I'm a computational biologist focused on solving problems related to aging. 
  I'm currently doing research with the Amaral Lab (amaral.northwestern.edu) of Northwestern University 🧬`,
  paraTwo: `I have a background in computer science and software engineering. 
  I'm a co-founder and was a lead engineer at Time by Ping (timebyping.com).`,
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
            textH4="My Work and Passion"
            textH3="Computational Biology"
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
            img="trading.svg"
            textH4="My Side Project"
            textH3="Trading"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="exercise.svg"
            textH4="My Morning Coffee"
            textH3="Exercise"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meditation.svg"
            textH4="Inner Peace and Mindfulness"
            textH3="Meditation"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
