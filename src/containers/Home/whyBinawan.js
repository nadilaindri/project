import React from 'react';
import { Row, Col, Image, Space, Typography } from 'antd';
import Icon1 from '../../assets/img/whyBinawan/icon-biu1.png';
import Icon2 from '../../assets/img/whyBinawan/icon-biu2.png';
import Icon3 from '../../assets/img/whyBinawan/icon-biu3.png';
import Icon4 from '../../assets/img/whyBinawan/icon-biu4.png';
import Icon5 from '../../assets/img/whyBinawan/icon-biu5.png';
import Icon6 from '../../assets/img/whyBinawan/icon-biu6.png';

// const { useBreakpoint } = Grid;
const { Text } = Typography;

function WhyBinawan() {
  // const { xs } = useBreakpoint()
  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={[32,0]} style={{ backgroundColor: '#fff', width: '100%' }}>
        <Col span={24}>
          <Space direction="vertical" size={32} style={{ width: '100%', textAlign: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>WHY BINAWAN?</Text>
            <Space direction='vertical' size={0}>
              <Text style={{ fontSize: 16 }}>Binawan prides itself on its excellence in each step of the activities that we do. As a pioneer in</Text>
              <Text style={{ fontSize: 16 }}>the industry, we have always invested in improving our processes, facilities, and infrastructure</Text>
              <Text style={{ fontSize: 16 }}>to maintain our edge ultimately to serve our clients and partners better.</Text>
            </Space>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col xxl={{ span: 16, offset: 4 }} lg={{ span: 20, offset: 2 }}>
          <Row gutter={[32,32]}>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon1}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>40 YEARS EXPERIENCE</Text>
                  <Text style={{ fontSize: 16 }}>As a licensed Manpower Agency in Indonesia we take care all the legal requirements in accordance to the Indonesian legal law & regulations to ensure you can conduct your recruitments safely</Text>
                </Space>
              </Space>
            </Col>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon2}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>GLOBAL NETWORK</Text>
                  <Text style={{ fontSize: 16 }}>Binawan Inti Utama is supported by the Binawan Group that are spread strategically throughout Indonesia, training and education, government institutions and partners in various sectors</Text>
                </Space>
              </Space>
            </Col>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon3}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>VALIDATED PROCESSING</Text>
                  <Text style={{ fontSize: 16 }}>The registration process for prospective candidates through BINAWAN is very carefully selected in order to be competent to compete with international workers from various other countries</Text>
                </Space>
              </Space>
            </Col>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon4}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>PERFECT KNOWLEDGE & JOB TRAINING</Text>
                  <Text style={{ fontSize: 16 }}>We ensure the congruency between the Indonesian talents competencies and qualifications and the accepted standard in the destination country</Text>
                </Space>
              </Space>
            </Col>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon5}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>POWERED BY JOBSHUB</Text>
                  <Text style={{ fontSize: 16 }}>We utilizes a thorough and multi layered pre screening methodology and has been proven to increase the chance of candidates suitability up to 200%</Text>
                </Space>
              </Space>
            </Col>
            <Col span={8}>
              <Space align="start" size={16}>
                <Image
                  width={80}
                  src={Icon6}
                  preview={false}
                  style={{ objectFit: 'contain' }}
                />
                <Space direction="vertical" size={0} style={{ width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '500' }}>CREDIBILITIES</Text>
                  <Text style={{ fontSize: 16 }}>BINAWAN is one of the companies fully supported by the Indonesian Ministry of Manpower. The legality of BINAWAN is no longer in doubt.</Text>
                </Space>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default WhyBinawan