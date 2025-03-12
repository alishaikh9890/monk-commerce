import React, {useState} from 'react'
import './Prod.css'
// import { v4 as uuidv4 } from "uuid";

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Button, Stack, Collapse } from 'react-bootstrap'
import Variant from '../variants/Variant'

const Prod = ({ id, status, index, task, addDiscount, delProduct, show, setShow, setInputId, pl, delVariant }) => {

    const [open, setOpen] = useState(false)

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        pointerEvents: transform ? 'none' : 'auto',
    }


    return (
        <div style={style}>
            <Stack >
                <div className='Prod'>
                    <span ref={setNodeRef} {...attributes} {...listeners}>⋮⋮</span>
                    {index + 1}.
                    <div className='d-flex shadow-input w-75 position-relative p-1'>
                        <input type='text' defaultValue={task.title} className='rounded-0 form-control border-0 bg-white' disabled placeholder='Select Product' />
                        <Button onClick={() => { setShow(!show); setInputId(id) }} style={{ right: "5px", top: "5px" }} variant="light" size="sm">🖋️</Button>
                    </div>

                    {!status ? (
                        <Button
                            onClick={() => addDiscount(id)}
                            variant="success"
                            className='rounded-1 discount'
                        >
                            Add Discount
                        </Button>
                    ) : (
                        <div className="d-flex gap-1 align-items-center discount">
                                <input
                                    type="text"
                                    placeholder="0"
                                    
                                    className="form-control rounded-0 shadow-1 fs-6"
                                />
                                <select
                                    className="form-select rounded-0"
                                    aria-label="Default select example"
                                >
                                    <option>% off</option>
                                    <option >flat off</option>
                                </select>
                        </div>
                    )}
                  
                    {
                        pl>=2 &&
                        <div className="">
                        <span
                            onClick={() => delProduct(id)}
                            className="btn btn-close btn-sm "
                        ></span>
                    </div>
                    }

                </div>
                <div className='ps-5'>
                    <Stack>
                        <div className='text-end px-4 translate-middle-y'>
                       { task.variants && 
                        (
                            <small
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='text-primary'
                        >
                            {!open ?
                                 ( 
                                    <span role="button"  ><span className='border-bottom border-primary' >hide variants </span> <i className="bi bi-chevron-down"></i></span>
                                    ) : ( 
                                     <span role="button"  ><span className="border-bottom border-primary">show variants</span> <i className="bi bi-chevron-up"></i></span>
                                )}
                        </small>
                        )  
                       }
                        </div>
                        <Collapse in={open} >
                            <div>
                            {
                                task.variants?.map((vr) => (
                                    <Variant key={vr.id} {...vr} delVariant={delVariant} vlength={task.variants.length} pro_id={id} />
                                ))
                            }
                            </div>
                        </Collapse>
                    </Stack>



                </div>
            </Stack>

        </div>
    )
}

export default Prod