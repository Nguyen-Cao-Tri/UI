import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{ width: 600 }} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Description"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input style={{ width: 600, height: 350 }} />
      </Form.Item>
      <Button
        style={{
          width: 150,
          borderRadius: 4,
          border: "1px solid #59d7e7",
          background: "#59d7e7",
          marginLeft: 750,
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
export default App;
