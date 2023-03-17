import React, { useEffect } from "react";
import './Managment.css';
import { Col, Row,Button,   Table, Input, Modal, Form, message, Spin } from "antd";
import { SearchOutlined,EditTwoTone, DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const ManagmentDynamic = () => {
    const [dataOfUser, setDataOfUser]=useState([])
    const [loadUser,setLoadUser]=useState(false)
    
    useEffect(()=>{

        const getData=async()=>{
            try{
                setLoadUser(true)
                const resUser=await axios.get("http://localhost:3001/users")
                console.log("data get::",resUser?.data);
                setDataOfUser(resUser?.data)
                setLoadUser(false)

    
            }catch(error){
                console.log(error);
            }
          
        }
        getData()
    },[])

  return (
    <>
  

   


     
        

    <Row className="Managment_Main_Row" style={{
       margin:70
    }}>
    <Col lg={24}>
    <Row style={{
        // marginBottom:-30,
        
        marginRight:70,
        marginLeft:70,
        marginTop:30
    }}>

        <Col lg={5}>
       <h2>User Managment</h2>
        </Col> 
        <Col lg={12}>
        <Input placeholder="Search"  className="changing_size" prefix={<SearchOutlined style={{color:'gainsboro',textIndent:5}}/>}/>
        </Col> 
        <Col lg={3}>
      
        </Col>
        <Col lg={4}>
            <Link to='/register-user'>
        <Button block >Add Register</Button>
        </Link>
        </Col>
       
    </Row>
    </Col>
    {loadUser?(
        <>
          <Spin size="large" />
        </>
    ):<>
        <Col lg={24}>
     
     <Row>
         <Col lg={24}>
         <table border={1} style={{width:'100%', marginTop:50}}>
 
           <tr>
           <th>ID</th>
 
             <th>Name</th>
             <th>Age</th>
             <th>Class</th>
             <th>Subject</th>
             <th>Action</th>
 
 
 
 
 
 
           </tr>
 
               {dataOfUser?.map((users)=>{
                 return(
                     <>
                         <tr>
             <td>{users?.id}</td>
 
             <td>{users?.userName}</td>
             <td>{users?.userAge}</td>
             <td>{users?.userClass}</td>
             <td>{users?.userSubject}</td>
             <td style={{textAlign:'center'}} >
                <DeleteOutlined  style={{color:"red", fontSize:20,cursor:'pointer'}}  />
                <EditOutlined   style={{color:"green", fontSize:20,cursor:'pointer'}}  />
 
 
             </td>
               
 
 
 
 
           </tr>
                     </>
                 )
 
               })}
              
         
 
        
        
         
         </table>
         </Col>
        </Row>
        </Col>
    </>}

       </Row>
    </>
  );
};
export default ManagmentDynamic;

