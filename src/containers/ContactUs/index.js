import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Breadcrumb, Card, Space, Grid } from 'antd';
import { MailOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function ContactUs() {
  const { xs } = useBreakpoint()  

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
            <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        {
          xs ?
            <>
              <Col span={24}>
                <Card style={{ width: '100%', height: 300, backgroundColor: '#E5BB66', borderRadius: 12, boxShadow: '0 2px 8px 1px #f1f3f4', textAlign: 'center', paddingTop: 8 }}>
                  <Space direction='vertical' size={32}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Contact Us</Text>
                    <Space direction='vertical'>
                      <Text style={{ fontSize: 15 }}>You can contact us using the following e-mail ID’s and phone number.</Text>
                      <Text style={{ fontSize: 15 }}>We will try our best to answer within 48 hours*</Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={22} style={{ marginTop: -100 }}>
                <Card style={{ width: '100%', backgroundColor: '#fff', borderRadius: 12, boxShadow: '0 2px 8px 1px #f1f3f4', padding: 16 }}>
                  <Space direction='vertical' size={16}>
                    <Space direction='vertical' size={0}>
                      <Text type='secondary' style={{ fontSize: 14, float: 'left' }}>Email</Text>
                      <Space>
                        <MailOutlined style={{ color: '#0D6E49', fontSize: 20, marginTop: 5 }} />
                        <Text type='secondary' style={{ fontSize: 18, fontWeight: 500 }}>wchss@binawan.ac.id</Text>
                      </Space>
                    </Space>
                    <Space direction='vertical' size={0}>
                      <Text type='secondary' style={{ fontSize: 14, float: 'left' }}>CP: Syafrima Wahyu</Text>
                      <Space>
                        <WhatsAppOutlined style={{ color: '#0D6E49', fontSize: 20, marginTop: 5 }} />
                        <Text type='secondary' style={{ fontSize: 18, fontWeight: 500 }}>0815-1011-9366</Text>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col span={1}></Col>
            </>
          :
            <>
              <Col span={24}>
                <Card style={{ width: '100%', height: 300, backgroundColor: '#E5BB66', borderRadius: 12, boxShadow: '0 2px 8px 1px #f1f3f4', textAlign: 'center', paddingTop: 16 }}>
                  <Space direction='vertical' size={32}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Contact Us</Text>
                    <Space direction='vertical'>
                      <Text style={{ fontSize: 16 }}>You can contact us using the following e-mail ID’s and phone number.</Text>
                      <Text style={{ fontSize: 16 }}>We will try our best to answer within 48 hours*</Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col span={2}></Col>
              <Col span={20} style={{ marginTop: -75 }}>
                <Card style={{ width: '100%', height: 150, backgroundColor: '#fff', borderRadius: 12, boxShadow: '0 2px 8px 1px #f1f3f4', padding: '20px 120px' }}>
                  <Row style={{ textAlign: 'center' }}>
                    <Col span={12}>
                      <Space direction='vertical' size={0}>
                        <Text type='secondary' style={{ fontSize: 14, float: 'left' }}>Email</Text>
                        <Space>
                          <MailOutlined style={{ color: '#0D6E49', fontSize: 20, marginTop: 5 }} />
                          <Text type='secondary' style={{ fontSize: 18, fontWeight: 500 }}>wchss@binawan.ac.id</Text>
                        </Space>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space direction='vertical' size={0}>
                        <Text type='secondary' style={{ fontSize: 14, float: 'left' }}>CP: Syafrima Wahyu</Text>
                        <Space>
                          <WhatsAppOutlined style={{ color: '#0D6E49', fontSize: 20, marginTop: 5 }} />
                          <Text type='secondary' style={{ fontSize: 18, fontWeight: 500 }}>0815-1011-9366</Text>
                        </Space>
                      </Space>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={2}></Col>
            </>
        }
      </Row>
    </React.Fragment>
  )
}

export default ContactUs