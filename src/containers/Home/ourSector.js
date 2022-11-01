import React from 'react';
import { Row, Col, Image, Space, Typography, Card } from 'antd';
import Icon1 from '../../assets/img/ourSector/ic-aviation.png';
import Icon2 from '../../assets/img/ourSector/ic-healthcare.png';
import Icon3 from '../../assets/img/ourSector/ic-agriculture.png';
import Icon4 from '../../assets/img/ourSector/ic-industries.png';
import Ellipse from '../../assets/img/ourSector/ellipse.png';
import AviationImg from '../../assets/img/ourSector/img-aviation.jpg';
import HealthcareImg from '../../assets/img/ourSector/img-healthcare.jpg';
import AgricultureImg from '../../assets/img/ourSector/img-agriculture.jpg';
import IndustriesImg from '../../assets/img/ourSector/img-industries.jpg';

// const { useBreakpoint } = Grid;
const { Text } = Typography;

function OurSector(props) {
  // const { xs } = useBreakpoint()
  const { active, handleMenuSector } = props
  const menu = [
    { label: 'Aviation & Hospitality', key: '1', icon: Icon1 },
    { label: 'Healthcare', key: '2', icon: Icon2 },
    { label: 'Agriculture', key: '3', icon: Icon3 },
    { label: 'Industries and others', key: '4', icon: Icon4 }
  ]
  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={[32,0]} style={{ backgroundColor: '#fff', width: '100%' }}>
        <Col span={24}>
          <Space direction="vertical" size={32} style={{ width: '100%', textAlign: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>OUR SECTOR</Text>
            <Space direction='vertical' size={0}>
              <Text style={{ fontSize: 16 }}>PT. Binawan Inti Utama is a leading manpower service in Indonesia established in 1989</Text>
              <Text style={{ fontSize: 16 }}>and duly registered with the Ministry of Manpower No. 400 of Year 2016. We have been</Text>
              <Text style={{ fontSize: 16 }}>placing qualified peaople for a wide variety of sectors, which we categorised into the following divisions:</Text>
            </Space>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col xxl={{ span: 16, offset: 4 }} lg={{ span: 20, offset: 2 }}>
          <Row gutter={[32,32]} style={{ textAlign: 'center' }}>
            {
              menu.map(item => 
                <Col key={item.key} span={6}>
                  <Space direction="vertical" onClick={() => handleMenuSector(item.key)} style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <Image
                      width={40}
                      height={40}
                      src={item.icon}
                      preview={false}
                      style={{ objectFit: 'contain' }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.label}</Text>
                    {
                      active === item.key ?
                        <Image
                          width={10}
                          src={Ellipse}
                          preview={false}
                          style={{ objectFit: 'contain' }}
                        />
                      :
                        null
                    }
                  </Space>
                </Col>
              )
            }
          </Row>
          <Row style={{ marginTop: 32 }}>
            <Col span={24}>
              <Row>
                <Col xl={2} xxl={3}></Col>
                <Col xl={8} xxl={7} style={{ zIndex: 1 }}>
                  <Card style={{ marginTop: 32, marginBottom: 32, marginRight: -32 }} bodyStyle={{ width: '100%', height: 300, padding: 32, overflowY: 'auto' }}>
                    {
                      active === '1' ?
                        <Space direction="vertical" size={16}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Aviation & Hospitality</Text>
                          <Space direction='vertical'>
                            <Text>An aviation and  hospitality professional, Binawan Inti Utama provide to take care of the consumer needs</Text>
                            <ul style={{ marginLeft: -24 }}>
                              <li><Text>Airline</Text></li>
                              <li><Text>Hotels</Text></li>
                              <li><Text>Restaurants & Cafes</Text></li>
                              <li><Text>Catering</Text></li>
                              <li><Text>Fast Food Chains</Text></li>
                              <li><Text>Retails</Text></li>
                              <li><Text>Cruises</Text></li>
                              <li><Text>Cleaning Service</Text></li>
                            </ul>
                          </Space>
                        </Space>
                      : active === '2' ?
                        <Space direction="vertical" size={16}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Health Care</Text>
                          <Space direction='vertical'>
                            <Text>Binawan provides a qualified healthcare professionals who capable for joining international healthcare in the world</Text>
                            <ul style={{ marginLeft: -24 }}>
                              <li><Text>Nurses</Text></li>
                              <li><Text>Physiotherapists</Text></li>
                              <li><Text>Midwives</Text></li>
                              <li><Text>Paramedics</Text></li>
                              <li><Text>Lab Technicians</Text></li>
                              <li><Text>Radiologists</Text></li>
                              <li><Text>Pharmacists</Text></li>
                              <li><Text>Caretakers</Text></li>
                            </ul>
                          </Space>
                        </Space>
                      : active === '3' ?
                        <Space direction="vertical" size={16}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agriculture</Text>
                          <Space direction='vertical'>
                            <Text>Binawan agro introduces modern day farming practices through greenhouse farming operations</Text>
                            <ul style={{ marginLeft: -24 }}>
                              <li><Text>Plantation</Text></li>
                              <li><Text>Landscaping</Text></li>
                              <li><Text>Power Plants</Text></li>
                            </ul>
                          </Space>
                        </Space>
                      : active === '4' ?
                        <Space direction="vertical" size={16}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Industries and others</Text>
                          <Space direction='vertical'>
                            <Text>To meet the demand abroad, Binawan carries out required  for industries and others competencies</Text>
                            <ul style={{ marginLeft: -24 }}>
                              <li><Text>Oil & Gas</Text></li>
                              <li><Text>Roads & Highways</Text></li>
                              <li><Text>Fabrication & Erection</Text></li>
                              <li><Text>Electronics</Text></li>
                              <li><Text>Garment & Textiles</Text></li>
                              <li><Text>Automotive</Text></li>
                            </ul>
                          </Space>
                        </Space>
                      : null
                    }
                  </Card>
                </Col>
                <Col xl={12} xxl={11}>
                  <Image
                    width={'100%'}
                    height={368}
                    src={
                      active === '1' ?
                        AviationImg
                      : active === '2' ?
                        HealthcareImg
                      : active === '3' ?
                        AgricultureImg
                      : active === '4' ?
                        IndustriesImg
                      : null
                    }
                    preview={false}
                    style={{ marginLeft: -32, objectFit: 'cover' }}
                  />
                </Col>
                <Col xl={2} xxl={3}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default OurSector