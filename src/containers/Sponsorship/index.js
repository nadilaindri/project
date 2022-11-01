import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Breadcrumb } from 'antd';

const { Text } = Typography;
function Sponsorship() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={64} style={{ backgroundColor: '#fff' }}>
        <Col span={24} style={{ marginBottom: 32 }}>
          <Breadcrumb style={{ marginTop: -16 }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Sponsorship</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Text style={{ fontSize: 15 }}>Cooming Soon!</Text>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Sponsorship