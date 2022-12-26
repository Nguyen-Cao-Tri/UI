import React, { useState } from 'react';
import {
  LoginOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  NotificationOutlined,
  AuditOutlined
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
  getItem('Skill', 'skill', <AuditOutlined />,[{label:'Create Skill',key:'createAccount'},{label:'List Skill',key:'listSkill'}]),
  getItem('List course', 'listCourse', <UnorderedListOutlined />),
  getItem('List student', 'listStudent', <UsergroupAddOutlined />),
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