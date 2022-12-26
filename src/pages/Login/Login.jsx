/* eslint-disable default-case */
import React from 'react'
import useRequest from '../../hook/useRequest';
import { useEffect, useState } from "react";
import { Button, Form, Input, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [data, setData] = useState([]);
  const { request } = useRequest();
  const navigate=useNavigate();
  useEffect(() => {
    request("http://localhost:8080/api/v1/accounts").then((res) => {
      res.data.forEach(itemData => {
        localStorage.setItem(`${itemData.username}`, `${itemData.password}`)
      })
      setData(res.data);
    });
  }, []);
  const onFinish = (values) => {
    const { username, password } = values
    console.log('username', username);
    console.log('password', password);
    const checkedPassword = localStorage.getItem(`${username}`)
    if (password === checkedPassword) {
     const role = data.filter(itemData=>itemData.password===password)
     console.log('role',role[0].role);
     navigate(`/${role[0].role}`)
    }
    else  
    notification.error({placement:'topRight',message:'Login Failed!'});
  }
  return (
    <div className="login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(269.88deg, #e4f4ff 6.75%, #fcf8ed 95.85%)' }}>
      <div className="item_login" style={{ background: '# ffff', borderRadius: 10 }}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          style={{ borderRadius: 5, boxSizing: 'border-box', width: 400, height: 250, padding: 50 }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              style={{ borderRadius: '4px' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              style={{ borderRadius: '4px' }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%', borderRadius: 4, border: '1px solid #59d7e7', background: '#59d7e7' }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login