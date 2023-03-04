import { Button, Col, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import { Link } from "react-router-dom";
import "./Regestration.css";

function Regestration() {
  return (
    <>
   
      <Row >
      <Link to="/user-list">
        <Button style={{width:200 ,float:'right'}}>Register</Button>
        </Link>
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
              <Input
                placeholder="First_Name"
                type="First_Name"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Mobile_No"
                type="Phone Number"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Email"
                type="Email"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Insta"
                type="Insta "
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Col>
            <Col lg={11} style={{marginTop:32}}>
              <Input
                placeholder="Date_Of_Birth"
                type="Date"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Family_Name"
                type="First_Name"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />

              <Input
                placeholder="Password"
                type="Password"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Confirm_Password"
                type="Confirm Password"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Col>
          </Row>
        </Col>






        <Col lg={24}>
        <Row
            style={{
              display: "flex",
              padding: 20,
              borderRadius: 10,
              justifyContent: "space-around",
              boxShadow: " 0px 0px 5px gainsboro",
            }}
            className="Main_Row_Of_Sceond_Regestration"
          >
            <Col lg={11}>
              <h1 style={{margin:5,fontSize:20 ,fontFamily: "Poor Story, cursive",}}>Address Infromation</h1>
              <Input
                placeholder="Address"
                type="Address"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Building Number"
                type="Building Number"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Street"
                type="Street"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="District"
                type="District "
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Col>
            <Col lg={11} style={{marginTop:32}}>
              <Input
                placeholder="Your City"
                type="City"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="ZipCode"
                type="ZipCode"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />

              <Input
                placeholder="Your Role"
                type="Your Role"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
              <Input
                placeholder="Your Gender"
                type="Your Gender"
                style={{
                  margin: 10,
                  backgroundColor: "rgba(201, 223, 246, 0.081)",
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Col>
          </Row>
            </Col>
      </Row>


      <Row style={{marginLeft:170 ,marginRight:210}} >
        <Col lg={20}>
        <Input placeholder="Massage" type="Massage" style={{width:350 ,margin:20}}/>
        </Col>
        <Col lg={4}>
            
        </Col>
      </Row>
      
    </>
  );
}

export default Regestration;
