import React from 'react'
import './Column.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Prod from '../products/Prod';

const Column = ({prod, addDiscount ,delProduct, show, setShow }) => {
  return (
    <div className='column'>
    <SortableContext items={prod} strategy={verticalListSortingStrategy}>
    {
        prod.map((ele, index) => (
            <Prod key={ele.id} {...ele} index={index}  addDiscount={addDiscount} delProduct={delProduct} show={show} setShow={setShow} />
        ))
    }
    </SortableContext>
    </div>
  )
}

export default Column;