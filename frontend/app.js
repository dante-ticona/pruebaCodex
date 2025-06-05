function InventoryApp() {
  const [items, setItems] = React.useState([
    { id: 1, name: 'Vodka', quantity: 10 },
    { id: 2, name: 'Rum', quantity: 5 },
  ]);
  const [name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const addItem = () => {
    if (!name || quantity === '') return;
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      name,
      quantity: parseInt(quantity, 10),
    };
    setItems([...items, newItem]);
    setName('');
    setQuantity('');
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQty, 10) } : item
      )
    );
  };

  return (
    <div>
      <h1>Bar Inventory Control</h1>
      <div>
        <input
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} -
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)}
              style={{ width: '60px' }}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<InventoryApp />, document.getElementById('root'));
