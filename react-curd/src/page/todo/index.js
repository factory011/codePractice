import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function Todo() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
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
