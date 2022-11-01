import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { env } from '../../../config/index';
import { Row, Col, Card, Form, Input, Upload, Button, message, Grid } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

function PaymentConfirmation() {
  const [form] = Form.useForm();
  const [paymentProofFile, setPaymentProofFile] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const { xs } = useBreakpoint()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleUpload = () => {
    return {
      withCredentials: true,
      accept:".jpg, .jpeg, .pdf, .png",
      beforeUpload: file => {
        const validateSize = file.size >= 500000;
        if (validateSize) {
          message.error('Max file size is 500 KB!');
          return false
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setPaymentProofFile(file)
          message.info('Upload Success!');
        }
        return false;
      },
    }
  }

  const onFinish = (values) => {
    values.paymentProofFile = paymentProofFile

    const data = new FormData();
    for (const [val, name] of Object.entries(values)) {
      data.append(val, name);
    }
    
    setSubmitLoading(true)
    setTimeout(() => {
      axios.post(`${env}/wchss/upload_payment`, data, {
        headers: {
          'Cache-Control': 'no-cache',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => {
        message.success('Payment Confirmation Success!')
        setSubmitLoading(false)
      }).catch(error => {
        message.error(error)
      })
    }, 1000);
  }

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  }

  return (
    <React.Fragment>
      <Row style={{ marginTop: xs ? 8 : 64 }}>
        <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
          <Card style={{ borderRadius: 8 }}>
            <Form
              layout="horizontal"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              style={{ marginTop: xs ? 8 : 32 }}
            >
              <Form.Item name="transactionNumber" label="Registration Number">
                <Input />
              </Form.Item>
              <Form.Item label="Transfer Evidence">
                <Upload {...handleUpload()}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item wrapperCol={ xs ? {span: 24} : { span: 16, offset: 5 } }>
                <Button type="primary" htmlType='submit' block loading={submitLoading}>Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default PaymentConfirmation