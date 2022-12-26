import React from "react";
import { Avatar, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const data = [
  {
    title: "Java core",
  },
  {
    title: "OOP",
  },
  {
    title: "Java ORM",
  },
  {
    title: "Spring Framework",
  },
  {
    title: "Relational Database",
  },
  {
    title: "SQL",
  },
  {
    title: "MySQL",
  },
  {
    title: "Relational Database",
  },

];
const ListCourse = () => (
  <List
    style={{ width: "50vw" }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <div style={{ width: "55%" , display:'flex' }}>
        <List.Item style={{width:'150px'}}>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
          />
        </List.Item>
        <div style={{ marginLeft: "200px",marginTop:'25px',display:'flex',justifyContent:'space-around',width:'100px'}}>
          <EditOutlined />
          <DeleteOutlined />
        </div>
      </div>
    )}
  />
);
export default ListCourse;
