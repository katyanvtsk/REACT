import{ useState } from "react"

const Shop = () => {
    const [cart, setCart] = useState([
        { id: 1, title: "Футболка", count: 1 },
        { id: 2, title: "Кепка", count: 2 },
]);

const increment = (id) => {
    setCart((prev) => 
        prev.map((item) => 
            item.id === id 
            ? {...item, count: item.count + 1}
            : item
        )
    )
}

const deleteItem = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
};

const clear = () => {
    setCart([])
}

return (
    <div style={{
            border: '2px solid #ccc',
            padding: '10px',
        }}>
        <h2>Корзина товаров</h2>
        {cart.map((item) => (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px',
                padding: '10px',
                border: '1px solid #eee',
            }}
            key={item.id}>
                <p>{item.title} Кол-во: {item.count}</p>


                <div style={{
                    display:'flex',
                    gap: '5px'
                }}>
                    <button onClick={() => increment(item.id)}>+1</button>
                    <button onClick={() => deleteItem(item.id)}>Удалить</button>
                </div>
            </div>
        ))}
            <div>
                <button onClick={clear}>Очистить корзину</button>
            </div>
    </div>

)
}

export default Shop