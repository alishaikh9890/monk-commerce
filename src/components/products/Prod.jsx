import React from 'react'
import './Prod.css'
// import { v4 as uuidv4 } from "uuid";

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Button } from 'react-bootstrap'

const Prod = ({id, status, index, addDiscount, delProduct, show, setShow}) => {

    const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

const style ={
    transition,
    transform: CSS.Transform.toString(transform),
    pointerEvents: transform ? 'none' : 'auto',
}


  return (
    <div  className='Prod' style={style}>
        <span ref={setNodeRef} {...attributes} {...listeners}>⋮⋮</span>
       {index+1}.
       
       <input type='text' className=' shadow-input rounded-0 form-control border-0 bg-white' disabled placeholder='Select Product'  />
       <Button onClick={() => setShow(!show)} variant="light" size="sm">🖋️</Button>
        
                       {!status ? (
                            <Button
                                onClick={() => addDiscount(id)}
                                variant="success"
                                className='rounded-1 discount'
                            >
                                Add Discount
                            </Button>
                        ) : (
                            <div className="row g-1">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        placeholder=""
                                        value="0"
                                        className="form-control rounded-0 shadow-1"
                                    />
                                </div>
                                <div className="col-6">
                                    <select
                                        class="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option>% off</option>
                                        <option >flat off</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <span
                                        onClick={() => delProduct(id)}
                                        className="btn btn-close "
                                    ></span>
                                </div>
                            </div>
                        )}
     
    </div>
  )
}

export default Prod