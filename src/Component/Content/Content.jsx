import { Col, Row, Button } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Regestration from "../../pages/Regestration/Regestration";
import Managment from "../../pages/User Managment/Managment";

function Content() {
  return (
    <>
      <Routes>

        <Route path="/" element={< Home/>}   />
        <Route path="/user-list" element={< Managment/>}   />
        <Route path="/Regestration_Form" element={< Regestration/>}/>
        

      </Routes>
    </>
  );
}

export default Content;
