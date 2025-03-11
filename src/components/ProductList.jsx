import React, { useState } from "react";
import {Row, Col, Container} from 'react-bootstrap'
import { v4 as uuidv4 } from "uuid";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor } from "@dnd-kit/core";
import Column from "./column/Column";
import { arrayMove } from "@dnd-kit/sortable";
import { useSensors } from "@dnd-kit/core";
import ProductPicker from "./ProductPicker";
import AddProduct from "./AddProduct";


function ProductList() {

    const [show, setShow] = useState(false)
    const [inputId, setInputId] = useState("")
    const [select, setSelect] = useState([])
    const [prod, setProd] = useState([
       { task:{}, id:uuidv4(), status:false},
    ]);



    const handleAdd = () => {
        
    }

    const handleSelect = (e, element, index) => {
        let event = e.target.checked
    //    const newEle = prod.find((ele) => ele.id == inputId)
    //     newEle.task = element
    //    const newProd = prod.map((ele) => ele.id == inputId ? ele = newEle : ele )
    //    console.log(newProd)
    //    console.log(element)


    if(event)
    {
        setSelect([...select, select[index]=element])
    }
    else{
        setSelect([...select, select.splice(index, 1)])
    }

    // console.log(select)
    // select.map(el=>console.log(el))

    // console.log(e.target.checked)
   
 
    }


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
        setProd([...prod, {task:{},  status: false, id: uuidv4()}]);
    };

    return (
    

        <div className="App">
       <Container  style={{maxWidth:"768px"}}>
        <Row className=" my-5 ps-5">
            <Col>
                <h4>Add Products</h4>
            </Col>
        </Row>
        <Row className="text-center">
            <Col>Products</Col>
            <Col>Discount</Col>
        </Row>
       </Container>
          
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column prod={prod} addDiscount={addDiscount} delProduct={delProduct} show={show} setShow={setShow} setInputId={setInputId} />
        </DndContext>

        <AddProduct handleProduct={handleProduct}/>

    <ProductPicker show={show} setShow={setShow} handleSelect={handleSelect} handleAdd={handleAdd}/>


        </div>


    );
}

export default ProductList;
