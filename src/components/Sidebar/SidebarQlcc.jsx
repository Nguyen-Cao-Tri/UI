import React, { useState } from 'react';
import {
  LoginOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon,children) {
  return {
    key,
    icon,
    label,
    children
  };
}
const items = [
  getItem('Account', 'account', <UserOutlined />,[{label:'Create Account',key:'createAccount'},{label:'List Account',key:'listAccount'}]),
  getItem('List course', 'listCourse', <UnorderedListOutlined />),
  getItem('List student', 'listStudent', <UsergroupAddOutlined />),
  getItem('Notification', 'notification', <NotificationOutlined />),
  getItem('Log out', 'logOut', <LoginOutlined />),

];
const Sidebar = (props) => {
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        onClick={props.onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{ height: '100vh' }}
      />
    </div>
  );
};
export default Sidebar;