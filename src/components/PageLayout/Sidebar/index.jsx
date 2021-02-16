import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  linkedin, github, twitter, email, calendly
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          Matt
          {' '}
          <span>Bordas</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Computational Biologist</div>
      <div className="centerAlign box">
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><FA name="linkedin" /></a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FA name="twitter" /></a>
        <a href={email} target="_blank" label="button" rel="noopener noreferrer"><FA name="paper-plane" /></a>
        <a href={calendly} target="_blank" label="button" rel="noopener noreferrer"><FA name="calendar" /></a>
      </div>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const { children } = props;
  let domContent = <DomContent />;

  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
