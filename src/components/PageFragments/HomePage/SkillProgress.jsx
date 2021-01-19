import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Top Skills</h2>
    <Row gutter={[20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={85}
          text="Python"
        />
        <ProgressBar
          percent={70}
          text="Pandas"
        />
        <ProgressBar
          percent={70}
          text="Flask"
        />
        <ProgressBar
          percent={60}
          text="ReactJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="Cloud Computing"
        />
        <ProgressBar
          percent={80}
          text="Cloud Architecture"
        />
        <ProgressBar
          percent={90}
          text="NodeJS"
        />
        <ProgressBar
          percent={75}
          text="DevOps"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
