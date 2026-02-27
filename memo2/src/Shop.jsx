import { useCallback, useState } from "react";
import CartItem from "./CartItem";

const Shop = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const increment = useCallback((id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }, []);

  const deleteItem = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clear = () => {
    setCart([]);
  };

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "10px",
      }}
    >
      <h2>Корзина товаров</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default Shop;
