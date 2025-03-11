import React from 'react'
import { Button, Container } from 'react-bootstrap'



const AddProduct = ({handleProduct}) => {
  return (
    <Container className='text-end p-3' style={{maxWidth:"720px"}}>
      <Button onClick={handleProduct} variant="outline-success rounded-0 border-2 " style={{width:"300px"}}>
                  Add Product
        </Button>
    </Container>
    
  )
}

export default AddProduct