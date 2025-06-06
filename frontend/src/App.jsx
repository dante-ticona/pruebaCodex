import { useState } from 'react'
import './App.css'
import logo from './logo.svg'

export default function App() {
  const getPlaceholder = (text) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'>` +
      `<rect width='100%' height='100%' fill='#ccc'/><text x='50%' y='50%' ` +
      `dominant-baseline='middle' text-anchor='middle' font-size='20' fill='#555'>` +
      `${text}</text></svg>`
    return `data:image/svg+xml,${encodeURIComponent(svg)}`
  }

  const initialItems = [
    {
      id: 1,
      name: 'Mojito',
      qty: 5,
      img: getPlaceholder('Mojito')
    },
    {
      id: 2,
      name: 'Margarita',
      qty: 3,
      img: getPlaceholder('Margarita')
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
        img: getPlaceholder(name),
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
      <img src={logo} alt="Logo" className="logo" />
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
