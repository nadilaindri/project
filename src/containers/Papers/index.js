import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Space, Typography, Breadcrumb, Divider, Button, Grid } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import TemplateAbstract from '../../assets/doc/Abstract-Template.doc';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Papers() {
  const { xs } = useBreakpoint()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={128} style={{ backgroundColor: '#fff' }}>
        <Col span={24} style={{ marginBottom: xs ? 16 : 32 }}>
          <Breadcrumb style={{ marginTop: xs ? 16 : -16 }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Call For Papers</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Space direction="vertical" size={32}>
            <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Call For Papers</Text>
            </Space>
            <Text style={{ fontSize: 15 }}>All honourable authors are kindly encouraged to contribute to and help shape the conference by submitting their research abstracts and papers. Also, high-quality research contributions describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in Health and Social Science focused on health, business, and work in a post pandemic world are cordially invited for presentation at the conference. The conference solicits abstracts and papers that address the conference’s themes and topics, including figures, tables, and references of novel research materials. All submitted conference papers will be blind peer-reviewed by two competent reviewers. Submitted papers must not be under consideration by any other journal or publication.</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>The topics of papers cover but are not limited to:</Text>
            <Space direction="vertical" size={8}>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Disaster Management: Crisis Management Before the Crisis Happen</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Climate Change and Occupational Hazard in a Post Pandemic World</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Health Industry: Sustainability, Business, and Financial Strategy</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Social Work Intervention, Community Development, and Disability Empowerment</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Positive Psychology, Wellbeing, and Mental Health</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Digital Technology, Transformation and Strategy</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Nutrition Strategies to Improve Community Food Security and Health in a Post Pandemic World</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Occupational Health and Safety in a Post Pandemic World</Text>
              </Space>
              <Space>
                <CheckCircleFilled style={{ color: '#0D6E49' }} />
                <Text style={{ fontSize: 16 }}>Future Molecular-Based Phenotyping of COVID-19 Testing</Text>
              </Space>
            </Space>
          </Space>
        </Col>
        <Col span={24} style={{ marginTop: xs ? 0 : 32, marginBottom: xs ? 0 : 32 }}>
          <Divider />
        </Col>
        <Col span={24}>
          <Space direction="vertical" size={xs ? 16 : 32} style={{ width: '100%', textAlign: 'center' }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Submit Abstract / Paper</Text>
            <Row gutter={[0,16]}>
              <Col xs={0} xl={2}></Col>
              <Col xs={24} xl={10}>
                <Space direction='vertical'>
                  <Text style={{ fontSize: 12 }}>Abstract / full-paper template</Text>
                  <Link to={TemplateAbstract} target="_blank" download>
                    <Button className='button-green'>Download here</Button>
                  </Link>
                </Space>
              </Col>
              <Col xs={24} xl={10}>
                <Space direction='vertical'>
                  <Text style={{ fontSize: 12 }}>Please submit your abstract / full-paper by clicking HERE</Text>
                  <Link to="/registration">
                    <Button className='button-yellow'>Submit here</Button>
                  </Link>
                </Space>
              </Col>
              <Col xs={0} xl={2}></Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Papers