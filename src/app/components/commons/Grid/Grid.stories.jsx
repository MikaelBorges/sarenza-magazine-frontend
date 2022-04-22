import React from 'react';

import { Col, Row } from '.';

export default {
  title: 'Grid',
  component: Row
};

export const Basic = () => (
  <Row>
    <Col span={4}>
      <div className="cell">Col 1</div>
    </Col>
    <Col span={4}>
      <div className="cell">Col 2</div>
    </Col>
    <Col span={4}>
      <div className="cell">Col 3</div>
    </Col>
  </Row>
);
export const Order = () => (
  <Row>
    <Col span={4} order={3}>
      <div className="cell">Col 1</div>
    </Col>
    <Col span={4} order={2}>
      <div className="cell">Col 2</div>
    </Col>
    <Col span={4} order={1}>
      <div className="cell">Col 3</div>
    </Col>
  </Row>
);
export const Offset = () => (
  <Row>
    <Col span={2} offset={2}>
      <div className="cell">Offset 2</div>
    </Col>
    <Col span={2} offset={1}>
      <div className="cell">Offset 1</div>
    </Col>
    <Col span={5}>
      <div className="cell">Col</div>
    </Col>
  </Row>
);

export const Responsive = () => (
  <Row>
    <Col span={12} sm={{ span: 2, offset: 2 }} lg={{ span: 2, offset: 0 }}>
      <div className="cell">Col 1</div>
    </Col>
    <Col span={12} sm={{ span: 2, offset: 2 }} lg={{ span: 2, offset: 0 }}>
      <div className="cell">Col 2</div>
    </Col>
    <Col span={12} sm={{ span: 2, offset: 2 }} lg={{ span: 2, offset: 0 }}>
      <div className="cell">Col 3</div>
    </Col>
  </Row>
);
