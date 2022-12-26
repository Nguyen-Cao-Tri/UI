import React from "react";
import { Avatar, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const data = [
  {
    title: "NhanVienVeSinh001",
  },
  {
    title: "NhanVienVeSinh002",
  },
  {
    title: "QLCC1",
  },
  {
    title: "QLCC2",
  },
  {
    title: "Trung123",
  },
  {
    title: "Tri456",
  },
  {
    title: "Loc789",
  },
  {
    title: "Long777",
  },
  {
    title: "David_didudua",
  },
];
const ListAccount = () => (
  <List
    style={{ width: "50vw" }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <div style={{ width: "100%" , display:'flex' }}>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
export default ListAccount;
