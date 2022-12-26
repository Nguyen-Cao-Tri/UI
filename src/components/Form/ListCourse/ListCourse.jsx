import React from "react";
import { Avatar, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const data = [
  {
    title: "Nhập môn lập trình",
  },
  {
    title: "Nhập môn CNTT",
  },
  {
    title: "Nhập môn CNTT 2",
  },
  {
    title: "Kỹ thuật phần mềm",
  },
  {
    title: "Toán tổ hợp",
  },
  {
    title: "Xác suất thống kê",
  },
  {
    title: "Mac-lenin",
  },
  {
    title: "Con người và môi trường",
  },
  {
    title: "Tính phân 1",
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
