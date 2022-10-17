import "./index.css";
import { Button } from "antd";

function Item(info) {
  const { data, setData } = info;
  const onDelete = (e) => {
    const id = e.currentTarget.getAttribute('id')
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        setData((preState) => {
          return preState.filter((ele) => {
            return (ele.id !== id);
          });
        });
      });
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
