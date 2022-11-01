import React from 'react';
// import { Row, Col, Image, Space, Typography, Grid } from 'antd';
import { Row, Col, Space, Typography, Tooltip } from 'antd';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

// const { useBreakpoint } = Grid;
const { Text } = Typography;
const markers = [
  { name: "UK", number: '53', coordinates: [-0.127758, 51.507351] },
  { name: "Netherlands", number: '640', coordinates: [4.895168, 52.370216] },
  { name: "Kuwait", number: '870', coordinates: [47.990341, 29.378586] },
  { name: "Saudi Arabia", number: '2.430', coordinates: [46.738586, 24.774265] },
  { name: "Qatar", number: '530', coordinates: [51.534817, 25.286106] },
  { name: "UAE", number: '139', coordinates: [55.296249, 25.276987] },
  { name: "Malaysia", number: '5.065', coordinates: [101.693207, 3.140853] },
  { name: "Australia", number: '200', coordinates: [151.209900, -33.865143] },
  { name: "Japan", number: '50', coordinates: [138.252924, 36.204824] },
  { name: "South Korea", number: '15.000', coordinates: [127.024612, 37.532600] }
];

function WorkersPlacement() {
  // const { xs } = useBreakpoint()
  return (
    <React.Fragment>
      <Row className='content-body' justify="space-around" align="middle" style={{ backgroundColor: '#fff', width: '100%' }}>
        <Col span={24}>
          <Space direction="vertical" size={32} style={{ width: '100%', textAlign: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>WORKERS PLACEMENT</Text>
            <Space direction='vertical' size={0}>
              <Text style={{ fontSize: 16 }}>As a licensed Manpower Agency in Indonesia, we take care all the legal requirements in</Text>
              <Text style={{ fontSize: 16 }}>accordance to the Indonesian legal law and regulations to ensure that you can conduct your</Text>
              <Text style={{ fontSize: 16 }}>recruitment safely.</Text>
            </Space>
          </Space>
        </Col>

        <Col span={24}>
          <ComposableMap style={{ marginTop: -64, marginBottom: -182 }}>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#FFF"
                    strokeWidth={0.5}
                    
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, number }) => (
              <Tooltip key={name} title={<Text>{name} <Text style={{ color: '#0D6E49', fontWeight: '500' }}>{number}</Text></Text>} color={"#fff"}>
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="#0D6E49" stroke="#fff" strokeWidth={2} />
                </Marker>
              </Tooltip>
            ))}
          </ComposableMap>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default WorkersPlacement