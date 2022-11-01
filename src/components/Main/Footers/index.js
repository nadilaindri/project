import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Space, Typography, Grid } from 'antd';
// import Logo from '../../../assets/img/WCHSS.png';
// import LogoUniversitasBinawan from '../../../assets/img/logo-universitas-binawan.png';
// import KampusMerdeka from '../../../assets/img/kampus-merdeka.png';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Footers() {
  const { xs } = useBreakpoint()
  return (
    <React.Fragment>
      {
        xs ?
          <Row className='content-body' gutter={[0,16]} justify="space-around" align="middle" style={{ backgroundColor: '#fff' }}>
            <Col span={12}>
              <Image
                width={'70%'}
                // src={Logo}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
            <Col span={12}></Col>
            <Col span={24}>
              <Row gutter={10} align="top">
                <Col span={11}>
                  <Text style={{ fontSize: 14 }}>Jl. Dewi Sartika No.25-30, Kalibata, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13630</Text>
                </Col>
                <Col span={7}>
                  <Space direction='vertical' size={0}>
                    <Link to='/' style={{ fontSize: 14 }}>Home</Link>
                    <Link to='/about' style={{ fontSize: 14 }}>About</Link>
                    <Link to='/call-for-papers' style={{ fontSize: 14 }}>Call For Papers</Link>
                    <Link to='/sponsorship' style={{ fontSize: 14 }}>Sponsorship</Link>
                  </Space>
                </Col>
                <Col span={6}>
                  <Space direction='vertical' size={0}>
                    <Link to='/registration' style={{ fontSize: 14 }}>Registration</Link>
                    <Link to='/publications' style={{ fontSize: 14 }}>Publications</Link>
                    <Link to='/contact-us' style={{ fontSize: 14 }}>Contact Us</Link>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Image
                width={'100%'}
                // src={LogoUniversitasBinawan}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
            <Col span={8}>
              <Image
                width={'100%'}
                // src={KampusMerdeka}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
          </Row>
        :
          <Row className='content-body' gutter={[0,16]} justify="space-around" align="middle" style={{ backgroundColor: '#fff' }}>
            <Col span={4}>
              <Image
                width={'70%'}
                // src={Logo}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
            <Col span={20}></Col>
            <Col span={10}>
              <Row gutter={32} align="top">
                <Col span={9}>
                  <Text style={{ fontSize: 14 }}>Jl. Dewi Sartika No.25-30, Kalibata, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13630</Text>
                </Col>
                <Col span={6}>
                  <Space direction='vertical' size={0}>
                    <Link to='/' style={{ fontSize: 14 }}>Home</Link>
                    <Link to='/about' style={{ fontSize: 14 }}>About</Link>
                    <Link to='/call-for-papers' style={{ fontSize: 14 }}>Call For Papers</Link>
                    <Link to='/sponsorship' style={{ fontSize: 14 }}>Sponsorship</Link>
                  </Space>
                </Col>
                <Col span={6}>
                  <Space direction='vertical' size={0}>
                    <Link to='/registration' style={{ fontSize: 14 }}>Registration</Link>
                    <Link to='/publications' style={{ fontSize: 14 }}>Publications</Link>
                    <Link to='/contact-us' style={{ fontSize: 14 }}>Contact Us</Link>
                  </Space>
                </Col>
                <Col span={3}></Col>
              </Row>
            </Col>
            <Col span={8}></Col>
            <Col span={3}>
              <Image
                width={'100%'}
                // src={LogoUniversitasBinawan}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
            <Col span={3}>
              <Image
                width={'100%'}
                // src={KampusMerdeka}
                preview={false}
                style={{ objectFit: 'cover' }}
              />
            </Col>
          </Row>
      }
    </React.Fragment>
  )
}

export default Footers