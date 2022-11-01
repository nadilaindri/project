import React from 'react';
import { Row, Col, Space, Typography, Grid, Card, Divider } from 'antd';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Info() {
  const { xs } = useBreakpoint()
  return (
    <React.Fragment>
      <Space direction='vertical' size={xs ? 16 : 64} style={{ marginTop: xs ? 8 : 32, width: '100%' }}>
        <Text style={{ fontSize: 15 }}>If your Abstract has been accepted either for oral or virtual category, you have to pay the relevant registration fees. Please note that one registration will cover only one presenter and/or one publication and one certificate. Furthermore, all Co-authors must register separately if they wish to attend the conference or to obtain certificates.</Text>
        
        <Row>
          <Col span={20} offset={2}>
            <Card style={{ textAlign: 'center', width: '100%', padding: 0, backgroundColor: '#E2E9E0' }} bodyStyle={{ padding: 8 }}>
              <Row>
                <Col span={8}>
                  <Text style={{ fontWeight: 'bold' }}>Category</Text>
                </Col>
                <Col span={8}>
                  <Text style={{ fontWeight: 'bold' }}>Early Bird</Text>
                </Col>
                <Col span={8}>
                  <Text style={{ fontWeight: 'bold' }}>Regular</Text>
                </Col>
              </Row>
            </Card>
            <Card style={{ textAlign: 'center', width: '100%', marginTop: 4, backgroundColor: '#F5F5F5' }} bodyStyle={{ padding: 8 }}>
              <Row>
                <Col span={8}>
                  <Text>Presenter</Text>
                </Col>
                <Col span={8}>
                  <Text>Rp 300.000 (USD 25)</Text>
                </Col>
                <Col span={8}>
                  <Text>Rp 450.000 (USD 35)</Text>
                </Col>
              </Row>
            </Card>
            <Card style={{ textAlign: 'center', width: '100%', padding: 0, marginTop: 4, backgroundColor: '#F5F5F5' }} bodyStyle={{ padding: 8 }}>
              <Row>
                <Col span={8}>
                  <Text>Participants</Text>
                </Col>
                <Col span={8}>
                  <Text>-</Text>
                </Col>
                <Col span={8}>
                  <Text>Rp 150.000 (USD 12)</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Space direction="vertical" size={0}>
          <Text style={{ fontWeight: 'bold' }}>Note :</Text>
          <Text>1. Selected papers will be published in indexed international journals</Text>
          <Text>2. Registration fee does not include International Journal publication fees</Text>
        </Space>
      </Space>

      <Divider style={{ marginBottom: 16 }} />

      <Space direction='vertical' size={xs ? 16 : 32}>
        <Text style={{ fontSize: xs ? 23 : 28, fontWeight: 'bold' }}>Payment Method</Text>
        <Space direction="vertical" size={16}>
          <Text>Registration fee can be paid by wire transfer or credit card.</Text>
          <Space direction="vertical" size={0}>
            <Text>Wire transfer</Text>
            <Text>Bank Name: Bank Negara Indonesia (BNI)</Text>
            <Text>Account Number: <Text copyable>8888825309</Text></Text>
            <Text>Account Name: Universitas Binawan</Text>
            <Text>Swift code: <Text type='danger'>ABDBDBD (only for foreign bank transfers)</Text></Text>
          </Space>
          <Text>Atau</Text>
          <Space direction="vertical" size={0}>
            <Text>Gopay</Text>
            <Text>Barcode</Text>
          </Space>
        </Space>
      </Space>
    </React.Fragment>
  )
}

export default Info