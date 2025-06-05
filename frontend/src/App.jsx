import { useState } from 'react'
import './App.css'

export default function App() {
  const initialItems = [
    {
      id: 1,
      name: 'Mojito',
      qty: 5,
      img: 'https://via.placeholder.com/150?text=Mojito'
    },
    {
      id: 2,
      name: 'Margarita',
      qty: 3,
      img: 'https://via.placeholder.com/150?text=Margarita'
    }
  ]
  const [items, setItems] = useState(initialItems)
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)

  const addItem = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setItems([
      ...items,
      {
        id: Date.now(),
        name,
        qty: Number(qty),
        img: `https://via.placeholder.com/150?text=${encodeURIComponent(name)}`,
      },
    ])
    setName('')
    setQty(1)
  }

  const updateQty = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: item.qty + delta } : item
    ))
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="app">
      <h1>Inventario de Tragos</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Nombre del trago"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={qty}
          onChange={e => setQty(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <div className="cards">
        {items.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Cantidad: {item.qty}</p>
            <div className="actions">
              <button onClick={() => updateQty(item.id, 1)}>+</button>
              <button onClick={() => updateQty(item.id, -1)} disabled={item.qty <= 1}>-</button>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
