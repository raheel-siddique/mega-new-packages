import React from "react";
import './Managment.css';
import { Col, Row,Button,   Table, Input, Modal, Form, message } from "antd";
import { SearchOutlined,EditTwoTone, DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import { useState } from "react";




const Managment = () => {
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);

  const [getEditData,setGetEditData]=useState(null)
  const [idOfUser,setIdOfUser]=useState("")



  const [usersData, setUsersData]=useState([
  
  ])
  
  const handleSubmit=(values)=>{
     console.log('form Data::', values);
     setModalAddUser(false)

    //  setUsersData((oldData)=>{
    //   const copyData=[...oldData]
    //   copyData.push(values)
    //   return copyData
    //  })
        const copyUserData=[...usersData]
        copyUserData.push(values)
     
        setUsersData(copyUserData)
    
    
  }

  // const deleteUser=(id)=>{
  
      // const dataOfUser=usersData.filter((values,index)=>{
      //   return index!==id;
      // })
      // setUsersData(dataOfUser)
    //    const dataOfUser=usersData.splice(id,1)
    //    const actualData=usersData.filter((values)=>{
    //      return values.userName!==dataOfUser.userName
    //    })
       
    //  setUsersData(actualData)
  // }
const deleteUser=(id)=>{

     const copyOfUserData=[...usersData]
     const deletedData=copyOfUserData.filter((values,index)=>{
      return index!==id
     })
     setUsersData(deletedData)
}
const editData=(id)=>{
  setIdOfUser(id)

  const copyOfUserDataForEdit=[...usersData]
   const getSpecificData=copyOfUserDataForEdit.filter((values, index)=>{
    return   index===id
   })
   setGetEditData(getSpecificData[0])
 setModalEditUser(true)

}
const handleEditSubmit=()=>{

 setModalEditUser(false)
   const copyOfUserDataMine=[...usersData]
      copyOfUserDataMine[idOfUser]=
      // {
      //     userName:getEditData?.userName,
      //     ageUser:getEditData.ageUser,
      //     classUser:getEditData.classUser,
      //     subjectUser:getEditData?.subjectUser
      // }

      getEditData
       setUsersData(copyOfUserDataMine)

}


const handleEditUserChange=(e)=>{
      // setGetEditData((prevData)=>{
      //   return {
      //     ...prevData,
      //     userName:e.target.value
      //   }
      // })
     const copyEditData={
        ...getEditData,
        userName:e.target.value
      }
      setGetEditData(copyEditData)
}
const handleEditAgeChange=(e)=>{
  // setGetEditData((prevData)=>{
  //   return {
  //     ...prevData,
  //     userName:e.target.value
  //   }
  // })
 const copyEditData={
    ...getEditData,
    ageUser:e.target.value
  }
  setGetEditData(copyEditData)
}
const handleEditClassChange=(e)=>{
  // setGetEditData((prevData)=>{
  //   return {
  //     ...prevData,
  //     userName:e.target.value
  //   }
  // })
 const copyEditData={
    ...getEditData,
    classUser:e.target.value
  }
  setGetEditData(copyEditData)
}
const handleEditSubjectChange=(e)=>{
  // setGetEditData((prevData)=>{
  //   return {
  //     ...prevData,
  //     userName:e.target.value
  //   }
  // })
 const copyEditData={
    ...getEditData,
    subjectUser:e.target.value
  }
  setGetEditData(copyEditData)
}

  return (
    <>
    {/* modal add user */}

    <Modal
       
        open={modalAddUser}
        // onOk={() => setModal1Open(false)}
        // onCancel={() => setModal1Open(false)}
        footer={false}
        closable={false}
        centered
      >
        <h1>Add User</h1>
       <Form
         onFinish={handleSubmit}
       >
            <Form.Item name='userName' >
              <Input  placeholder="User Name" />
            </Form.Item>  
            <Form.Item name='ageUser'>
              <Input  placeholder="Age" />  
            </Form.Item>  
            <Form.Item name='classUser'>
              <Input  placeholder="Class" />  
            </Form.Item> 
            <Form.Item name='subjectUser'>
              <Input  placeholder="Subject" />  
            </Form.Item>
            <Button block type="primary" htmlType="submit">Add User</Button>

       </Form>
      </Modal>

      {/* edit user */}

      <Modal
       
       open={modalEditUser}
       // onOk={() => setModal1Open(false)}
       // onCancel={() => setModal1Open(false)}
       footer={false}
       closable={false}
       centered
     >
       <h1>Edit User</h1>
      <Form
        onFinish={handleEditSubmit}
      >
             <Input  placeholder="User Name" value={getEditData?.userName} onChange={handleEditUserChange}  />
             <Input  placeholder="Age" value={getEditData?.ageUser} onChange={handleEditAgeChange} />  
             <Input  placeholder="Class" value={getEditData?.classUser} onChange={handleEditClassChange} />  
             <Input  placeholder="Subject" value={getEditData?.subjectUser} onChange={handleEditSubjectChange} />  
           <Button block type="primary" htmlType="submit">Edit User</Button>

      </Form>
     </Modal>

   


     
        

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
        <Input placeholder="Search" className="changing_size" prefix={<SearchOutlined style={{color:'gainsboro',textIndent:5}}/>}/>
        </Col> 
        <Col lg={3}>
      
        </Col>
        <Col lg={4}>
        <Button block onClick={()=>{setModalAddUser(true)}}>Add Row</Button>
        </Col>
       
    </Row>
    </Col>
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

          {usersData?.map((values, index)=>{
            return(
              <>
                 <tr>
            <td>{index+1}</td>

            <td>{values.userName}</td>
            <td>{values.ageUser}</td>
            <td>{values.classUser}</td>
            <td>{values.subjectUser}</td>
            <td style={{textAlign:'center'}} >
               <DeleteOutlined onClick={()=>{deleteUser(index)}}  style={{color:"red", fontSize:20,cursor:'pointer'}}  />
               <EditOutlined  onClick={()=>{editData(index)}}  style={{color:"green", fontSize:20,cursor:'pointer'}}  />


            </td>
              




          </tr>
              </>
            )
          })}

       
       
        
        </table>
        </Col>
       </Row>
       </Col>
       </Row>
    </>
  );
};
export default Managment;

// import React, { useEffect, useState } from "react";
// import './Managment.css';
// import { Col, Row,Button,   Table, Input, Result } from "antd";
// import { SearchOutlined,EditTwoTone  } from '@ant-design/icons';

// const Managment = () => {

// const [columns, setColumns] = useState ([]);
// const [dataSource, setDataSource] = useState ([]);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//   .then((res) => res.json())
//   .then((result) => {
//     const list = result.quotes || [];
//     const fristObject = list[1] || {};
//     const cols = [];
//     for (const key in fristObject) {
//       const col ={
//         title: key,
//         datandex: key,
//       };
//       cols.push(col);
//     }
//     setColumns(cols);

//     setDataSource(result.quotes);
//   });
// }, []);
//   return (
//     <>
//     <Row className="Managment_Main_Row" style={{
//        margin:70
//     }}>
//     <Col lg={24}>
//     <Row style={{
//         // marginBottom:-30,
        
//         marginRight:70,
//         marginLeft:70,
//         marginTop:30
//     }}>

//         <Col lg={5}>
//        <h2>User Managment</h2>
//         </Col> 
//         <Col lg={12}>
//         <Input placeholder="Search" className="changing_size" prefix={<SearchOutlined style={{color:'gainsboro',textIndent:5}}/>}/>
//         </Col> 
//         <Col lg={3}>
      
//         </Col>
//         <Col lg={4}>
//         <Button block>Add Row</Button>
//         </Col>
       
//     </Row>
//     </Col>
//     <Col lg={24}>
     
//     <Row>
//         <Col lg={24}>
//         <Table
//       columns={columns}
//       dataSource={dataSource}
//       style={{ marginTop: 50 ,}}
//       size="large"
//     />
//         </Col>
//        </Row>
//        </Col>
//        </Row>
//     </>
//   );
// };
// export default Managment;
