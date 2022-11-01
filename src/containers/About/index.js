import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Space, Typography, Breadcrumb, Divider, Grid } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import Pict from '../../assets/img/group.png';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function About() {
  let { xs } = useBreakpoint()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={64} style={{ backgroundColor: '#fff' }}>
        <Col span={24} style={{ marginBottom: xs ? 16 : 32 }}>
          <Breadcrumb style={{ marginTop: xs ? 16 : -16 }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={24} md={12} style={{ paddingBottom: 16 }}>
          <Image
            width={'100%'}
            src={Pict}
            preview={false}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Space direction="vertical" size={xs ? 8 : 16}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Aims and Scope</Text>
            <Text style={{ fontSize: 15 }}>The First World Conference on Health and Social Science is the First International conference involving 3 Faculties of Binawan University. It is planned as an annual event. This acitivity is supported by DRTPM (The Directorate of Research, Technology, and Community Service) funding. This activity aims to develop and evaluate research-based interventions to improve public health, reduce social inequalities in health, and communicate research results and implications to wide range of audiences.</Text>
          </Space>
        </Col>
        <Col span={24} style={{ marginTop: xs ? 0 : 32, marginBottom: xs ? 0 : 32 }}>
          <Divider />
        </Col>
        <Col span={24}>
          <Space direction="vertical" size={xs ? 8 : 16}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Scientific Committees</Text>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Prof. Vidhya Venugopal (Sri Ramachandra Institute of Higher Education and Research, India)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Prof. Dr. Ir. Illah Sailah, M.S. (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Dr. Aliana Dewi, SKp, MN. (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Mia Srimiati, S.Gz., M.Si (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Ervina Maulida, S.Pd., MBA (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Maryuni, SKM, MKM (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Prof. Chen, J.V (National Cheng Kung University, Taiwan)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>dr. Anna Suraya, MKK, SpOk (K), Ph.D. (Binawan University, Indonesia)</Text>
            </Space>
            <Space>
              <CheckCircleFilled style={{ color: '#0D6E49' }} />
              <Text style={{ fontSize: 16 }}>Ikenna Ebuenyi (University College Dublin, Irlandia)</Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default About