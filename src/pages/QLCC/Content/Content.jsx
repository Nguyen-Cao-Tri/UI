import React from "react";
import CreateAccount from "../../../components/Form/CreateAccount/CreateAccount";
import ListAccount from "../../../components/Form/ListAccount/ListAccount";
import ListCourse from "../../../components/Form/ListCourse/ListCourse";
import { Button } from "antd";
import ListStudent from "../../../components/Form/ListStudent/ListStudent";
import EditAccount from "../../../components/Form/EditAccount/EditAccount";
import InformationStudent from "../../../components/Form/InformationStudent/InformationStudent";
import Notification from '../../../components/Form/Notification/Notification'
import CreateSkill from "../../../components/Form/CreateSkill/CreateSkill";
import ListSkill from "../../../components/Form/ListSkill/ListSkill"
const Content = (props) => {
  const RenderUI = () => {
    if (props.clickKeyValue === "createAccount")
      return (
        <div
          style={{
            width: "80vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <CreateSkill />
        </div>
      );
    if (props.clickKeyValue === "listSkill") {
      return (
        <div style={{
          width: "80vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          marginLeft:-250,
          marginTop:20
        }}>
          <ListSkill />
        </div>
      );
    }
    if (props.clickKeyValue === "listCourse") {
      return (
        <div>
          <Button style={{background:'#33CCFF', margin:'20px'}}>Create New Course</Button>
          <ListCourse />
        </div>
      );
    }
    if (props.clickKeyValue === "listStudent") {
      return (
        <div>
          {/* <Button style={{background:'#33CCFF', margin:'20px'}}>Student Review</Button> */}
          <ListStudent />
        </div>
      );
    }
    if (props.clickKeyValue === "notification") {
      return (
        <div style={{padding:40}}>
          {/* <Button style={{background:'#33CCFF', margin:'20px'}}>Student Review</Button> */}
          <Notification />
        </div>
      );
    }
  };
  return (
    <div>
      <RenderUI />
    </div>
  );
};

export default Content;
