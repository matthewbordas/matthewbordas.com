import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
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
          text="React"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="C#"
        />
        <ProgressBar
          percent={90}
          text="Node"
        />
        <ProgressBar
          percent={90}
          text="DevOps"
        />
        <ProgressBar
          percent={80}
          text="Agile"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
