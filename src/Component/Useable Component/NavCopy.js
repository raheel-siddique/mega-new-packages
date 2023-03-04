// import React from "react";
// import { MenuOutlined,UserOutlined,MoreOutlined } from "@ant-design/icons";
// import { Button, Col, Row } from "antd";
// import "../Content/Content.css";
// import { Link } from "react-router-dom";

// function Navber(props) {
//   return (
//     <>
//       <Row className="main">
//         <Col xs={4} md={4} sm={4} lg={1}>
//           {" "}
//           <span className="Navber_Menu">
//             {" "}
//             {React.createElement(
//               props.collapsed ? MenuOutlined : MenuOutlined,
//               {
//                 className: "trigger",
//                 onClick: () => props.setCollapsed(!props.collapsed),
//               }
//             )}
//           </span>
//         </Col>
//         <Col
//           xs={20}
//           sm={20}
//           className="Col_1"
//           style={{ fontFamily: "Poor Story, cursive", height: "30px" }}
//           lg={2 }
//         >    
            
//            <a href="Navber.jsx">
//             <h3 className="Navber_Heading_Three">
//              MegaPackages
//             </h3>
//             </a>
//         </Col>
//         <Col lg={6}></Col>
//         <Col
//           xs={0}
//           sm={0}
//           className="Button_Main"
//           lg={15}
//           style={{
//             margin: "auto",
//           }}
//         >
//           <Link to='/'>

//           <button
        
//             className="btn_nav"
//             style={{
//               backgroundColor: " rgb(255, 187, 0)",
//               fontFamily: "Poor Story, cursive",
//               marginLeft: "10px",
//             }}
//           >
//             Home
//           </button>
//           </Link>

//           <button
//             className="btn_nav"
//             style={{
//               backgroundColor: "rgb(0, 51, 102) ",
//               marginLeft: "40px",
//               fontFamily: "Poor Story, cursive",
//             }}
//           >
//             About
//           </button>
//           <button
//             className="btn_nav"
//             style={{
//               backgroundColor: "rgb(0, 51, 102) ",
//               marginLeft: "40px",
//               fontFamily: "Poor Story, cursive",
//             }}
//           >
//             Blog
//           </button>
//           <button
//             className="btn_nav"
//             style={{
//               backgroundColor: "rgb(0, 51, 102) ",
//               marginLeft: "40px",
//               fontFamily: "Poor Story, cursive",
//             }}
//           >
//             Detail
//           </button>
//           <button
//             className="btn_nav"
//             style={{
//               backgroundColor: "rgb(0, 51, 102) ",
//               marginLeft: "40px",
//               fontFamily: "Poor Story, cursive",
//             }}
//           >
//             Contact Us
//           </button>
         
       
//         </Col>
       
//       </Row>
//     </>
//   );
// }

// export default Navber;
