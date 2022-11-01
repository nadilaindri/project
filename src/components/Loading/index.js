import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

export default class Loading extends Component {
  render() {
    return (
      <Row className="loading-style" align="middle">
        <Col xs={24} sm={24} md={24}>
          <Spin size="large" />
        </Col>
      </Row>
    )
  }
}