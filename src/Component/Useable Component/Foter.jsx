import { Row, Col, Input} from "antd";
import {
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import React from "react";
import './Foter.css';
function Foter() {
  return (
    <>
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
          color: "#fff",
          marginTop: "20px",
        }}
      >
        I’d Like to Learn More <br /> About Technitium
      </h1>
      <div className="Frist_Div"></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Input placeholder="Basic usage" className="Footer_Input" />
      </div>

      <Row>
        <Col md={5} sm={0} lg={8}></Col>
        <Col md={14} sm={23} lg={8}>
          <GithubOutlined className="Second_div" style={{ color: "white" }} />
          <GoogleOutlined className="Second_div" style={{ color: "white" }} />
          <TwitterOutlined className="Second_div" style={{ color: "white" }} />
          <FacebookFilled className="Second_div" style={{ color: "white" }} />
        </Col>
        <Col md={5} sm={1} lg={8}></Col>
      </Row>
      <h4 className="Footer_Four_Heading">
        © 2013 Your Website Name. All rights reserved | Design by{" "}
        <span className="Footer_Span"> TemplateOnWeb </span>
      </h4>
    </>
  );
}

export default Foter;
