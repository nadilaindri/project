import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Space, Typography, Image, Button, Grid, Divider, Badge } from 'antd';
import { ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import ExmapleImageDetail from '../../assets/img/news/exm-img-detail.jpeg';

const { Text } = Typography;
const { useBreakpoint } = Grid;

function GetBreakPoint() {
  const screens = useBreakpoint()
  return screens;
}

export default function News(props) {
  const { xxl, xs } = GetBreakPoint()

  return (
    <React.Fragment>
      <Row style={{ marginTop: 64 }}>
        <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }}>
          <Row gutter={32}>
            <Col span={16}>
              <Row gutter={xxl ? 32 : 16}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: -16 }}>LATEST NEWS</Text>
                <Divider style={{ border: xs ? '1px solid #000000' : '2px solid #000000', marginBottom: 32 }} />
                <Col xs={24} lg={14}>
                <Badge.Ribbon placement='start' text="Travel" color="#633FB5" style={{ marginTop: 255 }}>
                  <Image
                    width={'100%'}
                    height={300}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ borderRadius: 8, objectFit: 'cover' }}
                  />
                </Badge.Ribbon>

                  <Row className="mt-16">
                    <Col span={24}>
                      <Space className='width-100' direction="vertical" size={4}>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>Program Kampus Mengajar Lorem Ipsum Angkatan 1 Tahun 2022</Text>
                        <Space size={16}>
                          <Text className="light-color fs-14">By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined className="fs-12" />
                            <Text className="dark-color fs-12">11 Maret 2022</Text>
                          </Space>
                        </Space>
                        <Text>
                          Kampus Mengajar, bagian dari Kampus Merdeka, memanggil mahasiswa dari seluruh program studi dan perguruan tinggi di Indonesia untuk berkontribusi, membuat perubahan, sambil mengembangkan diri.Di masa pandemi, adik-adik di Sekolah Dasar, khususnya di daerah 3T (Tertinggal, Terluar, dan Terdepan), mengalami tantangan …
                        </Text>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} lg={10}>
                  <Row className={xs ? "mt-16" : null} justify="space-around" align="middle" gutter={xxl ? [32,32] : [12,16]}>
                    <Col xs={7} lg={8}>
                      <Image
                        width={'100%'}
                        height={100}
                        src={ExmapleImageDetail}
                        preview={false}
                        style={{ borderRadius: 8, objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={17} lg={16}>
                      <Space className='width-100' direction="vertical" size={0}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Program Festival Kampus Merdeka Tingkat Nasional</Text>
                        <Space size={8}>
                          <Text style={{ fontSize: 10 }}>By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 10 }} />
                            <Text style={{ fontSize: 10 }}>11 Maret 2022</Text>
                          </Space>
                        </Space>
                      </Space>
                    </Col>

                    <Col xs={7} lg={8}>
                      <Image
                        width={'100%'}
                        height={100}
                        src={ExmapleImageDetail}
                        preview={false}
                        style={{ borderRadius: 8, objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={17} lg={16}>
                      <Space className='width-100' direction="vertical" size={0}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Program Festival Kampus Merdeka Tingkat Nasional</Text>
                        <Space size={8}>
                          <Text style={{ fontSize: 10 }}>By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 10 }} />
                            <Text style={{ fontSize: 10 }}>11 Maret 2022</Text>
                          </Space>
                        </Space>
                      </Space>
                    </Col>

                    <Col xs={7} lg={8}>
                      <Image
                        width={'100%'}
                        height={100}
                        src={ExmapleImageDetail}
                        preview={false}
                        style={{ borderRadius: 8, objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={17} lg={16}>
                      <Space className='width-100' direction="vertical" size={0}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Program Festival Kampus Merdeka Tingkat Nasional</Text>
                        <Space size={8}>
                          <Text style={{ fontSize: 10 }}>By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 10 }} />
                            <Text style={{ fontSize: 10 }}>11 Maret 2022</Text>
                          </Space>
                        </Space>
                      </Space>
                    </Col>

                    <Col xs={7} lg={8}>
                      <Image
                        width={'100%'}
                        height={100}
                        src={ExmapleImageDetail}
                        preview={false}
                        style={{ borderRadius: 8, objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={17} lg={16}>
                      <Space className='width-100' direction="vertical" size={0}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Program Festival Kampus Merdeka Tingkat Nasional</Text>
                        <Space size={8}>
                          <Text style={{ fontSize: 10 }}>By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 10 }} />
                            <Text style={{ fontSize: 10 }}>11 Maret 2022</Text>
                          </Space>
                        </Space>
                      </Space>
                    </Col>

                    <Col xs={7} lg={8}>
                      <Image
                        width={'100%'}
                        height={100}
                        src={ExmapleImageDetail}
                        preview={false}
                        style={{ borderRadius: 8, objectFit: 'cover' }}
                      />
                    </Col>
                    <Col xs={17} lg={16}>
                      <Space className='width-100' direction="vertical" size={0}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Program Festival Kampus Merdeka Tingkat Nasional</Text>
                        <Space size={8}>
                          <Text style={{ fontSize: 10 }}>By John Doe</Text>
                          |
                          <Space size={4}>
                            <ClockCircleOutlined style={{ fontSize: 10 }} />
                            <Text style={{ fontSize: 10 }}>11 Maret 2022</Text>
                          </Space>
                        </Space>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Divider orientation="right" plain>
                    <Link to="/program">
                      <Button type="primary" style={{ borderRadius: 32 }}>Lihat Selengkapnya <ArrowRightOutlined /></Button>
                    </Link>
                  </Divider>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={[8,8]}>
                <Col span={24}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: -16 }}>INSTAGRAM FEEDS</Text>
                  <Divider style={{ border: xs ? '1px solid #000000' : '2px solid orange', marginBottom: 16, marginTop: 8 }} />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>

                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>

                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={8}>
                  <Image
                    width={'100%'}
                    height={xxl ? 150 : 116}
                    src={ExmapleImageDetail}
                    preview={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}