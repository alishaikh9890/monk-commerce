import React, {useState} from 'react'
import './Prod.css'
// import { v4 as uuidv4 } from "uuid";

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Button, Stack, Collapse } from 'react-bootstrap'

const Prod = ({ id, status, index, task, addDiscount, delProduct, show, setShow, setInputId }) => {

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
                        <input type='text' value={task.title} className='rounded-0 form-control border-0 bg-white' disabled placeholder='Select Product' />
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
                        <div className="row g-1 align-items-center">
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
                                    <span><span  className='border-bottom border-primary' >hide variants </span> <i class="bi bi-chevron-down"></i></span>
                                    ) : ( 
                                     <span><span className="border-bottom border-primary">show variants</span> <i class="bi bi-chevron-up"></i></span>
                                )}
                        </small>
                        )  
                       }
                        
                       
                        </div>
                        <Collapse in={!open} >
                            <div>
                            
                            {
                                task.variants?.map((vr) => (
                                    <div className='Prod' key={vr.id}>
                                        <span >⋮⋮</span>

                                        <div className='d-flex shadow-input w-75 position-relative overflow-hidden rounded-pill'>
                                            <input type='text' value={vr.title} className='rounded-0 form-control border-0 bg-white' disabled placeholder='Select Product' />
                                            {/* <Button onClick={() => {setShow(!show); setInputId(id)}} style={{ right:"5px", top:"5px"}} variant="light" size="sm">🖋️</Button> */}
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
                                            <div className="row g-1 align-items-center">
                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        value="0"
                                                        className="form-control rounded-pill shadow-1"
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <select
                                                        className="form-select rounded-pill"
                                                        aria-label="Default select example"
                                                    >
                                                        <option>% off</option>
                                                        <option >flat off</option>
                                                    </select>
                                                </div>
                                                <div className="col-2">
                                                    <span
                                                        onClick={() => delProduct(id)}
                                                        className="btn btn-close btn-sm "
                                                    ></span>
                                                </div>
                                            </div>
                                        )}

                                    </div>
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