import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { env } from '../../../config/index';
import { Row, Col, Card, Form, Input, Button, Typography, Grid, Modal, Space, message } from 'antd';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function CheckStatus() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(null);

  const { xs } = useBreakpoint()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    setTimeout(() => {
      axios.get(`${env}/wchss/check_status`, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'X-Requested-With': 'XMLHttpRequest'
        },
        params: values
      })
      .then(response => {
        const { data } = response.data
        
        setData(data)

        if(data.transactionNumber){
          setIsModalVisible(true);
        }else{
          message.info('Transaction Number does not match!')
        }
      }).catch(error => {
        message.error(error)
      })
    }, 500);
  }

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  }

  const status = (
    data?.transactionStatus === 'WAITING_FOR_PAYMENT' ?
      'Waiting For Payment'
    : data?.transactionStatus === 'PAYMENT_CONFIRMED' ? 
      'Payment Confirmed'
    : 
      'Transaksi Tidak ditemukan'
  )

  return (
    <React.Fragment>
      <Row style={{ marginTop: xs ? 8 : 64 }}>
        <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
          <Card style={{ borderRadius: 8, textAlign: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Check Your Registration Status</Text>
            <Form
              layout="horizontal"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              style={{ marginTop: 32 }}
            >
              <Form.Item name="transactionNumber" label="Registration Number" initialValue="">
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={ xs ? {span: 24} : { span: 16, offset: 5 } }>
                <Button type="primary" htmlType='submit' block>Search</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <Modal title="Transaction Status" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false}>
        <Space direction="vertical" size={8}>
          <Text>Registration Number: <Text style={{ fontWeight: 'bold' }}>{data?.transactionNumber}</Text></Text>
          <Text>Status: <Text style={{ fontWeight: 'bold' }}>{status}</Text></Text>
        </Space>
      </Modal>
    </React.Fragment>
  )
}

export default CheckStatus  