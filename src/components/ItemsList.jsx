import React from 'react'
import Item from './Item'

const ItemsList = ({items, setItems}) => {

    function handleDelete (id) {
        setItems(items.filter(a => a.id !== id))
    }

    const renderItems = () => {
        return items.map(item => {
            return <Item key={item.id} item = {item} handleDelete={handleDelete}/>
        })
    }
  return (
    <div className='mt-5'>
        <h1>Item List</h1>
        <div>{renderItems()}</div>
    </div>
  )
}

export default ItemsList