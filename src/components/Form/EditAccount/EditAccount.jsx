/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

const FormCreateAccount = () => {
  return (
    <Form
      name="basic"
      // onFinish={onFinish}
      autoComplete="off"
      style={{
        borderRadius: 5,
        boxSizing: "border-box",
        width: 400,
        height: 250,
        padding: 50,
      }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
        label="Username"
      >
        <div style={{ borderRadius: "4px" ,marginLeft:50}}> NhanVienVeSinh001</div>
      </Form.Item>
      <Form.Item
        name="password"
        label="New Password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input type="password" style={{ borderRadius: "4px" ,marginLeft:'22px',width:'160px'}} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Confirm Password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input type="password" style={{ borderRadius: "4px" }} />
      </Form.Item>
      <Form.Item
        name="name"
        label="Role"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input  style={{ borderRadius: "4px" , marginLeft:90, width:160}} />
      </Form.Item>
      
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: "50%",
            borderRadius: 4,
            border: "1px solid #59d7e7",
            background: "#59d7e7",
            marginLeft:'145px'
          }}
        >
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default () => <FormCreateAccount />;
