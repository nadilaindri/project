import React, { useState } from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";
import { Layout, Menu, Image, Space, Button, Row, Col, Grid, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/_logo-BIU.svg';
const { useBreakpoint } = Grid;
const { Header } = Layout;

function Headers() {
  const [visible, setVisible] = useState(false);
  
  let history = useHistory()
  let location = useLocation()
  let { xs, xxl } = useBreakpoint()
  
  const handleMenu = (e) => {
    history.push(e.key)
    setVisible(false)
  }

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };
  
  const items = [
    { label: 'Home', key: '/' },
    { label: 'About', key: '/about' },
    { label: 'Our Programs & Facilities', key: '/call-for-papers' },
    { label: 'News & Publications', key: '/sponsorship' },
    { label: 'Clients', key: '/publications' },
    { label: 'Contact', key: '/contact-us' }
  ]
  
  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <Header style={{ backgroundColor: '#fff', height: xxl ? 100 : xs ? 60 : 80, boxShadow: location.pathname === '/' ? null : '1px 4px 4px 1px #f2f2f2' }}>
            <Row style={{ marginTop: xxl ? 16 : 8 }}>
              <Col span={2} offset={11}>
                <Image
                  width={xxl ? '70%' : xs ? '100%' : '90%'}
                  src={ Logo }
                  preview={false}
                />
              </Col>
            </Row>
          </Header>
        </Col>
      </Row>
      <Header className='header'>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            {
              xs ?
                <Space style={{ float: 'right' }}>
                  <Link to='/registration'>
                    <Button className='button-registration'>Registration</Button>
                  </Link>
                  <Button size='large' icon={<MenuOutlined />} onClick={showDrawer} style={{ borderRadius: 4 }} />
                </Space>
              :
                <Space>
                  <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    selectedKeys={location.pathname}
                    onClick={handleMenu}
                    items={items}
                  />
                </Space>
            }
          </Col>
        </Row>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width={'50%'}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={['/']}
            selectedKeys={location.pathname}
            onClick={handleMenu}
            items={items}
          />
        </Drawer>
      </Header>
    </React.Fragment>
  )
}

export default Headers