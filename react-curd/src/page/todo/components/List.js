import "./index.css";
import Item from "./Item";

function List(info) {
  const {data, setData} = info
  return (
    <div className="List">
      {
        data.map(item => {
          return <Item data={item} setData={setData} key={item.id}></Item>
        })
      }
    </div>
  );
}

export default List;
