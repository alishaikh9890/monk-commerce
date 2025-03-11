import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor } from "@dnd-kit/core";
import Column from "./column/Column";
import { arrayMove } from "@dnd-kit/sortable";
import { useSensors } from "@dnd-kit/core";
import ProductPicker from "./ProductPicker";
import AddProduct from "./AddProduct";


function ProductList() {

    const [show, setShow] = useState(false)

    const [prod, setProd] = useState([
    //    {id:uuidv4(), title:"welcome", status:false},
    ]);


    const getProdPos = id => prod.findIndex(prod => prod.id === id);

    const handleDragEnd = event => {
        const {active, over} = event;

        if(active.id === over.id) return;

        setProd(prod => {
            const originalPos = getProdPos(active.id);
            const newPos = getProdPos(over.id)

            return arrayMove(prod, originalPos, newPos)
        })
    }


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor),

    )

    const delProduct = (id) => {
        const newProd = prod.filter((ele) => ele.id != id);
        setProd(newProd);
    };

    const addDiscount = (id) => {
        const newProd = prod.map((ele) =>
            ele.id == id ? { ...ele, status: !ele.status } : ele
        );
        setProd(newProd);
        console.log(prod)
    };

    const handleProduct = () => {
        setProd([...prod, { status: false, id: uuidv4()}]);
    };

    return (
        // <div className="container my-5" style={{ maxWidth: "600px" }}>
        //     <h4>Add Products</h4>
        //     <div className="row g-2 mb-3">
        //         <div className="col-1"></div>
        //         <div className="col-7">Product</div>
        //         <div className="col-4">Discount</div>
        //     </div>
        //     {prod.map((ele, index) => (
        //         <div className="row g-2 my-3 align-content-center">
        //             <div className="col-1 d-flex justify-content-between align-items-center">
        //                 <span className="badge text-bg-light fs-5 px-0">⋮⋮</span>
        //                 <span>{index + 1}.</span>
        //             </div>
        //             <div className="col-7">
        //                 <Paper
        //                     component="form"
        //                     sx={{
        //                         p: "2px 4px",
        //                         display: "flex",
        //                         alignItems: "center",
        //                     }}
        //                 >
                            
        //                     <InputBase
        //                         sx={{ ml: 1, flex: 1 }}
        //                         placeholder="Select"
        //                         inputProps={{ "aria-label": "Select Products" }}
        //                     />
        //                     <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        //                         <SearchIcon />
        //                     </IconButton>
                           
        //                 </Paper>
        //             </div>
        //             <div className="col-4">
        //                 {!ele.status ? (
        //                     <Button
        //                         onClick={() => addDiscount(ele.id)}
        //                         variant="contained"
        //                         color="success"
        //                     >
        //                         Add Discount
        //                     </Button>
        //                 ) : (
        //                     <div className="row g-1">
        //                         <div className="col-4">
        //                             <input
        //                                 type="text"
        //                                 placeholder=""
        //                                 value="0"
        //                                 className="form-control rounded-0 shadow-1"
        //                             />
        //                         </div>
        //                         <div className="col-6">
        //                             <select
        //                                 class="form-select"
        //                                 aria-label="Default select example"
        //                             >
        //                                 <option selected>% off</option>
        //                                 <option value="1">flat off</option>
        //                             </select>
        //                         </div>
        //                         <div className="col-2">
        //                             <span
        //                                 onClick={() => delProduct(ele.id)}
        //                                 className="btn btn-close "
        //                             ></span>
        //                         </div>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     ))}
        //     <div className="my-3 text-end">
        //         <Button onClick={handleProduct} variant="outlined" color="success">
        //             Add Product
        //         </Button>
        //     </div>
        // </div>

        <div className="App">

        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column prod={prod} addDiscount={addDiscount} delProduct={delProduct} show={show} setShow={setShow} />
        </DndContext>

        <AddProduct handleProduct={handleProduct}/>

    <ProductPicker show={show} setShow={setShow}/>


        </div>


    );
}

export default ProductList;
