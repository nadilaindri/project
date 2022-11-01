import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { env } from '../../config/index'
import { Row, Col, Typography, Breadcrumb, Form, Radio, Input, Button, Divider, Grid, Menu, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PaymentConfirmation from './PaymentConfirmation';
import CheckStatus from './CheckStatus';
import Info from './Info';

const { useBreakpoint } = Grid;
const { Text } = Typography;

function Registration() {
  const [form] = Form.useForm();
  const [type, setType] = useState('PARTICIPANT');
  const [fileUploadFile, setFileUploadFile] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const { xs } = useBreakpoint()
  let location = useLocation()
  let history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleMenu = (e) => {
    history.push(e.key)
  }

  const handleType = (e) => {
    setType(e.target.value)
  }

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
          setFileUploadFile(file)
          message.info('Upload Success!');
        }
        return false;
      },
    }
  }

  const onFinish = (values) => {
    if(fileUploadFile){
      values.fileUploadFile = fileUploadFile
    }

    const data = new FormData();
    for (const [val, name] of Object.entries(values)) {
      data.append(val, name);
    }
    
    setSubmitLoading(true)
    setTimeout(() => {
      axios.post(`${env}/wchss/register`, data, {
        headers: {
          'Cache-Control': 'no-cache',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => {
        history.push({
          pathname: '/registration/success',
          state: response.data
        })
        setSubmitLoading(false)
      }).catch(error => {
        message.error(error)
      })
    }, 1000);
  }

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  }

  const items = [
    { label: 'Application', key: '/registration' },
    { label: 'Payment Confirmation', key: '/registration/payment-confirmation' },
    { label: 'Check Status', key: '/registration/check-status'},
    { label: 'Info & Payment Method', key: '/registration/info-and-payment-method' }
  ]

  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={[8,8]} style={{ backgroundColor: '#fff' }}>
        <Col span={24} style={{ marginBottom: xs ? 16 : 32 }}>
          <Breadcrumb style={{ marginTop: xs ? 16 : -16 }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Registration</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        {
          xs ?
            <>
              <Col span={24}>
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Registration</Text>
              </Col>
              <Col span={12}>
                <Link to="/registration">
                  {
                    location.pathname === '/registration' ?
                      <Button type="primary" block ghost>
                        Application
                      </Button>
                    :
                      <Button block>
                        Application
                      </Button>
                  }
                </Link>
              </Col>
              <Col span={12}>
                <Link to="/registration/payment-confirmation">
                  {
                    location.pathname === '/registration/payment-confirmation' ?
                      <Button type="primary" block ghost>
                        Payment Confirmation
                      </Button>
                    :
                      <Button block>
                        Payment Confirmation
                      </Button>
                  }
                </Link>
              </Col>
              <Col span={12}>
                <Link to="/registration/check-status">
                  {
                    location.pathname === '/registration/check-status' ?
                      <Button type="primary" block ghost>
                        Check Status
                      </Button>
                    :
                      <Button block>
                        Check Status
                      </Button>
                  }
                </Link>
              </Col>
              <Col span={12}>
                <Link to="/registration/info-and-payment-method">
                  {
                    location.pathname === '/registration/info-and-payment-method"' ?
                      <Button type="primary" block ghost>
                        Info & Payment Method
                      </Button>
                    :
                      <Button block>
                        Info & Payment Method
                      </Button>
                  }
                </Link>
              </Col>
            </>
          :
            <Col span={24}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Registration</Text>
              <Menu 
                mode="horizontal" 
                defaultSelectedKeys={['/registration']}
                selectedKeys={location.pathname}
                items={items}
                onClick={handleMenu}
                style={{ marginTop: 32 }}
              />
            </Col>
            
        }
        <Col span={24}>
          {
            location.pathname === '/registration/payment-confirmation' ?
              <PaymentConfirmation />
            : location.pathname === '/registration/check-status' ?
              <CheckStatus />
            : location.pathname === '/registration/info-and-payment-method' ?
              <Info />
            :
              <Form
                layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                style={{ marginTop: xs ? 8 : 32 }}
              >
                <Form.Item label="Registration Category" name="type" initialValue={type}>
                  <Radio.Group onChange={handleType}>
                    <Radio value="PARTICIPANT">Participant</Radio>
                    <Radio value="PRESENTER">Presenter</Radio>
                    <Radio value="AUTHOR">Co-Author</Radio>
                  </Radio.Group>
                </Form.Item>
                <Divider />
                <Form.Item name="firstName" label="First Name">
                  <Input />
                </Form.Item>
                <Form.Item name="lastName" label="Last Name">
                  <Input />
                </Form.Item>
                <Form.Item name="education" label="Highest Education Qualification">
                  <Input />
                </Form.Item>
                <Form.Item name="country" label="Country">
                  <Input />
                </Form.Item>
                <Form.Item name="nationality" label="Nationality">
                  <Input />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
                <Form.Item name="alternativeEmail" label="Alternative Email">
                  <Input />
                </Form.Item>
                <Form.Item name="mobileNumber" label="Mobile Number">
                  <Input />
                </Form.Item>
                <Form.Item name="titleAbstract" label="Title of the Abstract">
                  <Input />
                </Form.Item>
                {
                  type === 'PARTICIPANT' ?
                    <Form.Item name="fileUploadFile" label="Abstract" tooltip="(Docx and Max. 2MB)">
                      <Upload {...handleUpload()}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                      </Upload>
                    </Form.Item>
                  :
                    null
                }
                <Form.Item wrapperCol={ xs ? {span: 24} : { span: 16, offset: 5 } }>
                  <Button type="primary" htmlType='submit' block loading={submitLoading}>Register</Button>
                </Form.Item>
              </Form>
          }
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Registration