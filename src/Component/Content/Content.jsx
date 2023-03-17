import { Col, Row, Button } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Regestration from "../../pages/Regestration/Regestration";
import Managment from "../../pages/User Managment/Managment";
import ManagmentDynamic from "../../pages/User Managment/ManagmentDynmaic";

function Content() {
  return (
    <>
      <Routes>

        <Route path="/" element={< Home/>}   />
        <Route path="/user-list" element={< ManagmentDynamic/>}   />
        <Route path="/register-user" element={< Regestration/>}/>
        

      </Routes>
    </>
  );
}

export default Content;
