import React from 'react'
import { ListGroup, Stack } from 'react-bootstrap'


const Picker = ({el, ele, select, handleSelectVarent}) => {
    const {id, title, inventory_quantity, price } = el;
  return (
    <ListGroup.Item className='py-1' key={id} onClick={() => handleSelectVarent(ele, el)} >
    <Stack className='px-5' direction="horizontal" gap={3}>
    <div className="py-2">
    <input
        type='checkbox'
        // checked={select.find((sel) => sel.id == ele.id)?.variants?.some((se) => se.id == id) || false}
        className='form-check-input checkbox'
  />
    </div>
    
    <div className="p-2">{title}</div>
    <div className="p-2 ms-auto">
        {inventory_quantity} availaible
    </div>
    <div className="py-2">
    ₹ {price} 
    </div>
</Stack>
    </ListGroup.Item>
  )
}

export default Picker