import React from 'react';
import { Row, Col, Space, Typography, Card, Image } from 'antd';
import Icon1 from '../../assets/img/ourProgram/ic-1.png';
import Icon2 from '../../assets/img/ourProgram/ic-2.png';
import Icon3 from '../../assets/img/ourProgram/ic-3.png';

// const { useBreakpoint } = Grid;
const { Text } = Typography;

// function GetBreakPoint() {
//   const screens = useBreakpoint()
//   return screens;
// }

export default function cta() {
  // const { xs, xxl } = GetBreakPoint()
  
  return (
    <React.Fragment>
      <Row gutter={[16,64]} style={{ width: '100%', backgroundColor: '#117137', marginTop: 64, padding: 64 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 'bold' }}>OUR PROGRAMS & FACILITIES</Text>
        </Col>

        <Col span={8}>
          <Card style={{ width: '100%', height: 350, backgroundColor: '#17AA4E', border: 0, borderRadius: 12, boxShadow: '0 2px 8px 1px #005132', paddingTop: 8 }} bodyStyle={{ padding: '48px 64px' }}>
            <Space direction='vertical' size={16}>
              <Image
                width={60}
                src={Icon1}
                preview={false}
                style={{ objectFit: 'contain' }}
              />
              <Text style={{ color: '#ffffff', fontSize: 23, fontWeight: 'bold', lineHeight: 1 }}>Professional Development</Text>
              <Space direction='vertical'>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>Providing high quality training needs for Indonesian competency to the required global standart </Text>
              </Space>
            </Space>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ width: '100%', height: 350, backgroundColor: '#17AA4E', border: 0, borderRadius: 12, boxShadow: '0 2px 8px 1px #005132', paddingTop: 8 }} bodyStyle={{ padding: '48px 64px', height: 302, overflowY: 'auto' }}>
            <Space direction='vertical' size={16}>
              <Image
                width={60}
                src={Icon2}
                preview={false}
                style={{ objectFit: 'contain' }}
              />
              <Text style={{ color: '#ffffff', fontSize: 23, fontWeight: 'bold', lineHeight: 1 }}>Binawan Training Center and Binawan Vocational Training</Text>
              <Space direction='vertical' size={0}>
                <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600 }}>1. LANGUAGE</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>English Courses | Japanese Courses | German Course</Text>
                <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600 }}>2. HEALTHCARE</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>EMT-Basic | Caregiver | International Nursing</Text>
                <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600 }}>3.HOSPITALITY</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>Barista | Roaster | Waiter | Housekeeping</Text>
                <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 600 }}>4. AGRICULTURE</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>Plantation | Greenhouse | Packaging & Distribution</Text>
              </Space>
            </Space>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ width: '100%', height: 350, backgroundColor: '#17AA4E', border: 0, borderRadius: 12, boxShadow: '0 2px 8px 1px #005132', paddingTop: 8 }} bodyStyle={{ padding: '48px 64px', height: 302, overflowY: 'auto' }}>
            <Space direction='vertical' size={16}>
              <Image
                width={60}
                src={Icon3}
                preview={false}
                style={{ objectFit: 'contain' }}
              />
              <Text style={{ color: '#ffffff', fontSize: 23, fontWeight: 'bold', lineHeight: 1 }}>Binawan Agro</Text>
              <Space direction='vertical' size={0}>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>The business unit just started its operation in 2021 and implement precision in agriculture and modern-day farming practices through greenhouse faring operations.</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>1. Greenhouse Farming</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>2. Product Processing & Packaging</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>3. Training & Extension Services</Text>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>4. Product Marketing</Text>
              </Space>
            </Space>
          </Card>
        </Col>

        <Col span={24}>
          <Row gutter={[8,8]}>
            <Col span={24} style={{ width: '100%', textAlign: 'center' }}>
              <Text style={{ color: '#ffffff', fontSize: 23, fontWeight: 500 }}>OUR PROGRAM EXISTING</Text>
            </Col>
            <Col span={12} offset={6}>
              <ul style={{ color: '#ffffff' }}>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Binawan preparing talents to global job markets in various sectors</Text>
                </li>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Registered Nurse- UAE</Text>
                </li>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Nurse and Midwife- MoH Saudi Arabia</Text>
                </li>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Nurse - Kuwait</Text>
                </li>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Caregiver- Jepang</Text>
                </li>
                <li>
                  <Text style={{ color: '#ffffff', fontSize: 15 }}>Community Care Assistant- UK</Text>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>

      </Row>
    </React.Fragment>
  )
}
