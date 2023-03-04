import React, { useState } from 'react';
import "./Component/Content/Content.css"
import Contents from './Component/Content/Content';
import image from './Component/Images/205308526_1387339381647038_5738602038861336686_n.jpg'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AntDesignOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Col, Layout, Menu, theme,Row, Avatar, Image, Divider } from 'antd';
import Navber from './Component/Useable Component/Navber';
import Foter from './Component/Useable Component/Foter';
import Meta from 'antd/es/card/Meta';
import { Link, Routes, useLocation } from 'react-router-dom';
import Managment from './pages/User Managment/Managment';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const location=useLocation()
  console.log("location::",location.pathname)

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
     <Layout >

      
      <Sider collapsedWidth={0} trigger={null} y collapsed={collapsed} className="Header_layot">
        <div className="logo" />
        <Row style={{borderBottom:'1px solid #fff' ,paddingBottom:20}}>
        <img
    width={"40%"}
    style={{
      borderRadius:"50px",
      marginLeft:15
    }}
    src={image}
  />
  
  <p style={{
    color:'gainsboro',
    padding:13,
    gap:5,
    margin:5,

  }}>
    Amaan
    <Link to='/Regestration_Form'>
    <Row>
    
  <Col lg={9}>< LogoutOutlined  style={{color:'white'}}/></Col> 
 <Col lg={9} style={{color:'white'}}> LogOut</Col> 
 
  </Row>
  </Link>
</p>
</Row>
              <ul className='list_side_menu_nav'>
 <Link style={{width:'100%', color:'white'}} to='/'>
   <li className={location.pathname==='/'?"list_menu active_list_menu":'list_menu'}>
    <HomeOutlined /> Home</li></Link>

 <Link style={{width:'100%', color:'white'}} to='/user-list'>
   <li className={location.pathname==='/user-list'?"list_menu active_list_menu":'list_menu'}>
     <UserOutlined/>User List</li></Link>

              </ul>
      </Sider>
      <Layout className="site-layout" style={{
        backgroundColor:'white',
        paddingInline:'0px',
        padding:'0px',
        
      }}>
        <Header
           style={{ color: "#fff", backgroundColor: "rgb(0, 51, 102)" ,
           paddingInline:'0px',
           padding:'0px',
           
          }}

        >
            <Navber collapsed={collapsed} MenuUnfoldOutlined={MenuUnfoldOutlined} MenuFoldOutlined={MenuFoldOutlined} setCollapsed={setCollapsed}/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 15,
            minHeight: 280,
          }}
        >
          <Contents />
        </Content>
        <Footer
         style={{ backgroundColor: " rgb(0, 51, 102)" }}
         className="Making_Footer">
          <Foter />
        </Footer>
      </Layout>
    </Layout>


    </>
  )
}

export default App