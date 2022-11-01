import React from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Image, Grid, Carousel } from 'antd';
import B1 from '../../assets/img/banner/BINAWAN-1.png';
import B2 from '../../assets/img/banner/BINAWAN-2.png';
import B3 from '../../assets/img/banner/BINAWAN-3.png';
import B4 from '../../assets/img/banner/BINAWAN-4.png';
import B5 from '../../assets/img/banner/BINAWAN-5.png';

const { useBreakpoint } = Grid;

function Banner() {
  let { xxl } = useBreakpoint()
  return (
    <React.Fragment>
      <Row style={{ padding: 0, position: 'relative', backgroundColor: '#fff' }}>
        <Col span={24}>
          <Carousel autoplay>
            <div>
              <Image
                width={'100%'}
                height={ xxl ? 700 : 500 }
                src={B1}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <Image
                width={'100%'}
                height={ xxl ? 700 : 500 }
                src={B2}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <Image
                width={'100%'}
                height={ xxl ? 700 : 500 }
                src={B3}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <Image
                width={'100%'}
                height={ xxl ? 700 : 500 }
                src={B4}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <Image
                width={'100%'}
                height={ xxl ? 700 : 500 }
                src={B5}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Carousel>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Banner