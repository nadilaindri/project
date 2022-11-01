import React from 'react';
import { Row, Col, Image } from 'antd';
// import Background from '../../assets/img/home/bg.png';
import CTA from '../../assets/img/CTA.png';

// const { useBreakpoint } = Grid;
// const { Text } = Typography;

// function GetBreakPoint() {
//   const screens = useBreakpoint()
//   return screens;
// }

export default function cta() {
  // const { xs, xxl } = GetBreakPoint()
  
  return (
    <React.Fragment>
      <Row style={{ width: '100%' }}>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} xxl={{ span: 14, offset: 5 }}>
          <a href="https://jobshub.id" target="_blank" rel="noreferrer">
            <Image
              width={'100%'}
              src={CTA}
              preview={false}
            />
          </a>
        </Col>
      </Row>
    </React.Fragment>
  )
}
