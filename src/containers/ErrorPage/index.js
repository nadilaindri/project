import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Result } from 'antd';

function ErrorPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" gutter={64} style={{ backgroundColor: '#fff' }}>
        <Col span={24} style={{ marginBottom: 32 }}>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Link to='/'>
                <Button type="primary">Back Home</Button>
              </Link>
            }
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ErrorPage