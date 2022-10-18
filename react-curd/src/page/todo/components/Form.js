import { Form, Input, Button } from "antd";
import { useState } from "react";
import "./index.css";
import { v4 as uuid } from "uuid";

function FormWrap({ data, setData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const fetchPostData = async () => {
    const reqData = { id: uuid(), name: name, age: age };
    const res = await fetch("http://localhost:3000/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    const relult = await res.json();
    setData([...data, relult]);
    setName("");
    setAge("");
  };

  const handleSubmit = () => {
    fetchPostData();
  };
  return (
    <div className="Form">
      <Form className="login-form">
        <Form.Item label="姓名">
          <Input value={name} onChange={onChangeName}></Input>
        </Form.Item>
        <Form.Item label="年龄">
          <Input value={age} onChange={onChangeAge}></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            新增
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormWrap;
