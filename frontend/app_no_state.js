function renderInventoryApp() {
  ReactDOM.render(<InventoryApp items={window.inventoryItems} />, document.getElementById('root'));
}

window.inventoryItems = [
  { id: 1, name: 'Vodka', quantity: 10 },
  { id: 2, name: 'Rum', quantity: 5 },
];

function InventoryApp({ items }) {
  const nameRef = React.useRef(null);
  const qtyRef = React.useRef(null);

  const addItem = () => {
    const name = nameRef.current.value.trim();
    const qty = qtyRef.current.value;
    if (!name || qty === '') return;
    const newItem = { id: items.length ? items[items.length - 1].id + 1 : 1, name, quantity: parseInt(qty, 10) };
    window.inventoryItems = [...items, newItem];
    nameRef.current.value = '';
    qtyRef.current.value = '';
    renderInventoryApp();
  };

  const removeItem = (id) => {
    window.inventoryItems = items.filter((item) => item.id !== id);
    renderInventoryApp();
  };

  const updateQuantity = (id, newQty) => {
    window.inventoryItems = items.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(newQty, 10) } : item
    );
    renderInventoryApp();
  };

  return (
    <div>
      <h1>Bar Inventory Control (Sin useState)</h1>
      <div>
        <input placeholder="Item name" ref={nameRef} />
        <input type="number" placeholder="Quantity" ref={qtyRef} />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} -
            <input
              type="number"
              defaultValue={item.quantity}
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

renderInventoryApp();
