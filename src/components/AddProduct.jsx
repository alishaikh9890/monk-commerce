import React from 'react'
import { Button } from 'react-bootstrap'



const AddProduct = ({handleProduct}) => {
  return (
    <div>
    <div className="text-end">
    <Button onClick={handleProduct} variant="outline-success rounded-1 " style={{width:"200px"}}>
                 Add Product
             </Button>
         </div>
     </div>
  )
}

export default AddProduct