import React from 'react'
import { ListGroup, Stack } from 'react-bootstrap'


const Picker = ({el, ele, select, handleSelectVarent}) => {
    const {id, title, inventory_quantity, price } = el;

    const isSelected = select.some((sel) =>
      sel.id == ele.id && sel.variants.some((variant) => variant.id == id)
    );


  return (
    <ListGroup.Item className='py-1' key={id} onClick={() => handleSelectVarent(ele, el)} >
    <Stack className='px-5' direction="horizontal" gap={3}>
    <div className="py-2">
    <input
        type='checkbox'
        checked={isSelected}
        readOnly
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