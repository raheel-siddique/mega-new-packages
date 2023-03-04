import React from 'react'
import './Content.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import catImage from '../Images/images (2).jpeg'
import { Avatar, Card ,Col,Row } from 'antd';
const { Meta } = Card
function Cards() {
  return (
    <>
    <h1 style={{
      marginTop:50,
      marginBottom:20,
      marginLeft:17,
      fontSize:22
    }}>The Groom Room Packages</h1>
    <Row>
        <Col lg={5}>
    <Card
    style={{
      width: 260,
      boxShadow:'2px 2px 8px rgb(157, 153, 153)'
    }}
   
    cover={
      <img
        alt="example"
        src={catImage}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={catImage} />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  </Col>
  <Col lg={5}>

  <Card
    style={{
      width: 260,
      boxShadow:'2px 2px 8px rgb(157, 153, 153)'
    }}
   
    cover={
      <img
        alt="example"
        src={catImage}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={catImage} />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  </Col>
  <Col lg={5}>

  <Card
    style={{
      width: 260,
      boxShadow:'2px 2px 8px rgb(157, 153, 153)'
    }}
   
    cover={
      <img
        alt="example"
        src={catImage}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={catImage} />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  </Col>
  
  </Row>
    </>
  )
}

export default Cards