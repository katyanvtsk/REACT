import { memo } from "react";

const CartItem = ({ item, increment, deleteItem }) => {
  console.log(`render cartItem с id: ${item.id}`);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid #eee",
      }}
    >
      <p>
        {item.title} Кол-во: {item.count}
      </p>

      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <button onClick={() => increment(item.id)}>+1</button>
        <button onClick={() => deleteItem(item.id)}>Удалить</button>
      </div>
    </div>
  );
};

export default memo(CartItem);
