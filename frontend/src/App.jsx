import { useState } from 'react'
import './App.css'

export default function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)

  const addItem = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setItems([...items, { id: Date.now(), name, qty: Number(qty) }])
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
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.qty}
            <button onClick={() => updateQty(item.id, 1)}>+</button>
            <button onClick={() => updateQty(item.id, -1)} disabled={item.qty <= 1}>-</button>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
