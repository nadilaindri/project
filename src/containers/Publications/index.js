import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Breadcrumb, Space, Grid } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Publications() {
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
            <Breadcrumb.Item>Publications</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Space direction="vertical" size={xs ? 16 : 32}>
            <Space direction="vertical" size={16}>
              <Text style={{ fontSize: xs ? 23 : 28, fontWeight: 'bold' }}>Publications</Text>
              <Text style={{ fontSize: 15 }}>Papers that have been selected will be classified to be presented through poster presentations or oral presentations. Papers selected for poster presentation will be published in the proceedings while papers selected for oral presentation will be published in journals.</Text>
            </Space>
            <Space direction="vertical" size={16}>
              <Text style={{ fontSize: xs ? 23 : 28, fontWeight: 'bold' }}>List of Journal</Text>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Applied Microbiology</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Bacteria</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Biomedicines</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Medicines</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Pharmacy</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Social Sciences</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>BMC Public Health (Scopus Q1)</Text>
              </Space>
            </Space>
            <Space direction="vertical" size={16}>
              <Text style={{ fontSize: xs ? 23 : 28, fontWeight: 'bold' }}>Proceeding</Text>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Advances in Health Sciences Research by Atlantis Press</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Advances in Social Science, Education and Humanities Research by Atlantis Press</Text>
              </Space>
              <Space>
                <RightOutlined style={{ color: '#E5BB66' }} />
                <Text style={{ fontSize: 16 }}>Proceeding of World Conference on Health and Social Science</Text>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Publications