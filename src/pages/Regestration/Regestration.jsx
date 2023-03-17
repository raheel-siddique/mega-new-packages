import { Button, Col, Form, Input, Row, Select,message } from "antd";
import { Option } from "antd/es/mentions";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Regestration.css";

function Regestration() {
  const navigate=useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const [loadUser,setLoadUser]=useState(false)

  const handleSubmit=async(values)=>{
    try{
      setLoadUser(true)
      const respUser=await axios.post('http://localhost:3001/users', {
        userName:values.userName,
        userAge:values.userAge,
        userClass:values.userClass,
         userSubject:values.userSubject

      })
      messageApi.open({
        type: 'success',
        content: 'User Has been Added Successfully',
      });
      setLoadUser(false)

      setTimeout(()=>{
        navigate('/user-list')

    },1000)
    }catch(dfbfhdmnfdghddj){
      messageApi.open({
        type: 'error',
        content: 'something went wrong',
      });
    }
  }
  return (
    <>
   {contextHolder}
      <Row >
      <Link to="/user-list">
        <Button style={{width:200 ,float:'right'}}>Register</Button>
        </Link>
        <Form style={{width:'100%'}} onFinish={handleSubmit}>
        <Col lg={24} className="">
          <Row
            style={{
              display: "flex",
              padding: 20,
              borderRadius: 10,
              justifyContent: "space-around",
              boxShadow: " 0px 0px 5px gainsboro",
            }}
            className="Main_Row_Of_Regestration"
          >
             
            <Col lg={11}>
                
              <h1 style={{margin:5,fontSize:20 ,fontFamily: "Poor Story, cursive",}}>Regestration Form</h1>
             <Form.Item name='userName'>
              <Input
                placeholder="User_Name"
                type="User"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              </Form.Item>
             <Form.Item name='userAge'>

              <Input
                placeholder="Age"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              </Form.Item>
             <Form.Item name='userClass'>

              <Input
                placeholder="Class"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              </Form.Item>
             <Form.Item name='userSubject'>

              <Input
                placeholder="Subject"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              </Form.Item>
              <Button block type='primary' htmlType="submit">Register</Button>
            </Col>
          </Row>
        </Col>    
        </Form>
      </Row>


      
    </>
  );
}

export default Regestration;
