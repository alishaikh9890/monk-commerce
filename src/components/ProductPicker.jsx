import { Button, Modal,ListGroup, Stack, Spinner, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


const ProductPicker = ({ show, setShow }) => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

  

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://stageapi.monkcommerce.app/task/products/search?search=${search}&page=1&limit=10`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "72njgfa948d9aS7gs5"
                    }
                }
            )
            const arr = await res.json();
             arr ?  setData(arr) : setData([])
            console.log(arr)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
       
    }

    useEffect(() => {
        fetchData();
    }, [search])


    return (
        
            <Modal size="lg" show={show} onHide={()=>setShow(false)} >
                <Modal.Header closeButton>
                    <Modal.Title >Add Products</Modal.Title>
                </Modal.Header>
                
                
                <Modal.Body className='p-0 overflow-auto'  style={{maxHeight:"70vh"}}>
                <div className='border py-2 px-5 '>
                    <input placeholder='🔎 search items' onChange={(e) => setSearch(e.target.value)} className='form-control rounded-0 px-4' />
                </div>
                
                <ListGroup variant="flush" className='border'>
                {
                    loading ? (
                            <Spinner animation="border" variant='primary' size="lg" className='my-5 mx-auto' role="status">
                                 <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    )
                        : error ? 
                        "someting went wrong" :
                    data.map((ele) =>   (
                        <ListGroup.Item key={ele.id} className='p-0' >
                            <Stack direction="horizontal" className='px-3' gap={3}>
                                <div className="py-2">
                                <input
                                    type='checkbox'
                                    className='form-check-input checkbox'
                               
                              />
                                </div>
                                <div className="py-2">
                                     <img width="40px" height="40px" className='img-fluid rounded-1 overflow-hidden' src={ele.image.src} />
                                </div>
                                <div className="py-2">{ele.title}</div>
                            </Stack>
                            <ListGroup variant="flush" className='border-top p-0'>
                            {
                                ele.variants?.map((el) => (
                                    <ListGroup.Item key={el.id} >
                                    <Stack className='px-5' direction="horizontal" gap={3}>
                                    <div className="py-2">
                                    <input
                                        type='checkbox'
                                        className='form-check-input checkbox'
                                   
                                  />
                                    </div>
                                    
                                    <div className="p-2">{el.title}</div>
                                    <div className="p-2 ms-auto">
                                        {el.inventory_quantity} availaible
                                    </div>
                                    <div className="py-2">
                                    ₹ {el.price} 
                                    </div>
                                </Stack>
                                    </ListGroup.Item>
                                ))
                            }
                               
                            </ListGroup>
                        </ListGroup.Item>
                    ))
                }
                   
                </ListGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        
    )
}

export default ProductPicker