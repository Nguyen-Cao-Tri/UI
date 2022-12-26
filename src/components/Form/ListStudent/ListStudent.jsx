import React from "react";
import { Avatar, List } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
const data = [
  {
    title: "Nguyễn Cao Trí",
  },
  {
    title: "Nguyễn Hoàng Huy",
  },
  {
    title: "Nguyễn Đình Lộc",
  },
  {
    title: "Hoàng Trần Thành Trung",
  },
  {
    title: "Lê Hoàng Long",
  },
];
const ListStudent = () => (
  <List
    style={{ width: "50vw" }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <div style={{ width: "55%", display: "flex" }}>
        <List.Item style={{ width: "200px" }}>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
          />
        </List.Item>
        <div
          style={{
            marginLeft: "200px",
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-around",
            width: "100px",
          }}
        >
          <EditOutlined />
          <DeleteOutlined />
          <InfoCircleOutlined />
        </div>
      </div>
    )}
  />
);
export default ListStudent;
