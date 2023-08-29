

import Item from './Item'
import { useState } from 'react'

const ItemList = () => {
  const [items, setItems] = useState([])

  const newItem = {
    id: '',
    name: '',
    minLevel: 1,
    maxLevel: 5,
    currentLevel: 1
  }
  
  const addItem = () => {
    setItems([...items, newItem])
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => {
        return <div className='item-wrapper'><Item item={item}></Item><button value={index} onClick={() => deleteItem(index)}>Click Me</button></div>
      })}
    </div>
    

  )
}

export default ItemList;