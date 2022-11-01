import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Space, Typography, Grid, Card, Button } from 'antd';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Success() {
  const { xs, xl, xxl } = useBreakpoint()
  let history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { data } = history.location.state
  const type = (
    data?.type === 'PARTICIPANT' ?
      'Participant'
    : data?.type === 'PRESENTER' ?
      'Presenter'
    : data?.type === 'AUTHOR' ?
      'Co-Author'
    : null
  )
  return (
    <React.Fragment>
      <Space direction='vertical' size={xs ? 16 : 64} style={{ padding: xxl ? '80px 300px' : xl ? '40px 160px' : '26px 8px', width: '100%', backgroundColor: '#fff' }}>
        <Card style={{ width: '100%', padding: xxl ? '32px 64px' : xl ? '8px 16px' : 0  }}>
          <Space direction='vertical' size={xs ? 8 : 16} style={{ width: '100%' }}>
            <Space direction='vertical' size={xs ? 4 : 8}>
              <Text style={{ fontSize: xs ? 20 : 30, fontWeight: 'bold', color: '#0D6E49' }}>Thank You</Text>
            </Space>
            <Space direction="vertical" size={10}>
              <Text>You have registered as a <Text style={{ fontWeight: 'bold', color: '#0D6E49' }}>{type}</Text></Text>
              <Text style={{ fontSize: xs ? 16 : 20, fontWeight: 'bold' }}>THIS REGISTRATION PROOF HAS BEEN SENT TO YOUR EMAIL</Text>
            </Space>
            <Text style={{ fontWeight: 'bold' }}>Your Registration Number: <Text>{data?.transactionNumber}</Text></Text>
            {
              data?.type === 'PARTICIPANT' ?
                <>
                  <Text>Please make payment via:</Text>
                  <Space direction="vertical" size={8}>
                    <Space direction="vertical" size={2}>
                      <Text style={{ fontWeight: 'bold' }}>Wire transfer</Text>
                      <Text>Bank Name: Bank Negara Indonesia (BNI)</Text>
                      <Text>Account Number: <Text copyable>8888825309</Text></Text>
                      <Text>Account Name: Universitas Binawan</Text>
                      <Text>Swift code: <Text type='danger'>ABDBDBD (only for foreign bank transfers)</Text></Text>
                    </Space>
                  </Space>
                  <Text>Or</Text>
                  <Space direction="vertical" size={2}>
                    <Text style={{ fontWeight: 'bold' }}>Gopay</Text>
                    <Text>Barcode</Text>
                  </Space>
                </>
              : null
            }
          </Space>
          {
            data?.type === 'PARTICIPANT' ?
              <Row gutter={[8,8]} style={{ textAlign: 'center', marginTop: 32 }}>
                <Col xs={0} xl={2}></Col>
                <Col xs={24} xl={10}>
                  <Link to="/registration/payment-confirmation">
                    <Button className='button-green' block>Upload Bukti Pembayaran</Button>
                  </Link>
                </Col>
                <Col xs={24} xl={10}>
                  <Link to="/">
                    <Button className='button-back' block>Halaman Utama</Button>
                  </Link>
                </Col>
                <Col xs={0} xl={2}></Col>
              </Row>
            : null
          }
        </Card>
      </Space>
    </React.Fragment>
  )
}

export default Success