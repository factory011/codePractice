import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function Todo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("组件挂载完之后执行");
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    return () => {};
  }, []);

  return (
    <div className="Todo">
      <Form data={data} setData={setData}></Form>
      {data.length > 0 ? <List data={data} setData={setData}></List> : null}
    </div>
  );
}

export default Todo;
