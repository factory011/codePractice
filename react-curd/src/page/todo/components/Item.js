import "./index.css";
import { Button } from "antd";

function Item({ data, setData }) {
  const fetchDelData = async (e) => {
    const id = e.currentTarget.getAttribute("id");
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    const relult = await res.json();
    console.log(relult);
    setData((preState) => {
      return preState.filter((ele) => {
        return ele.id !== id;
      });
    });
  };

  const onDelete = (e) => {
    fetchDelData(e);
  };
  return (
    <div className="Item">
      <div>
        <span>{data.name}</span> <span>{data.age}</span>
      </div>
      <div>
        <Button id={data.id} onClick={onDelete}>
          删除
        </Button>
      </div>
    </div>
  );
}

export default Item;
