import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, TextField } from "@mui/material";


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function ProductList() {
    const [prod, setProd] = useState([]);

    const delProduct = (id) => {
        const newProd = prod.filter((ele) => ele.id != id);
        setProd(newProd);
    };

    const addDiscount = (id) => {
        const newProd = prod.map((ele) =>
            ele.id == id ? { ...ele, status: !ele.status } : ele
        );
        setProd(newProd);
    };

    const handleProduct = () => {
        setProd([...prod, { status: false, id: uuidv4() }]);
    };

    return (
        <div className="container my-5" style={{ maxWidth: "600px" }}>
            <h4>Add Products</h4>
            <div className="row g-2 mb-3">
                <div className="col-1"></div>
                <div className="col-7">Product</div>
                <div className="col-4">Discount</div>
            </div>
            {prod.map((ele, index) => (
                <div className="row g-2 my-3 align-content-center">
                    <div className="col-1 d-flex justify-content-between align-items-center">
                        <span className="badge text-bg-light fs-5 px-0">⋮⋮</span>
                        <span>{index + 1}.</span>
                    </div>
                    <div className="col-7">
                        <Paper
                            component="form"
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Select"
                                inputProps={{ "aria-label": "Select Products" }}
                            />
                            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                           
                        </Paper>
                    </div>
                    <div className="col-4">
                        {!ele.status ? (
                            <Button
                                onClick={() => addDiscount(ele.id)}
                                variant="contained"
                                color="success"
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
                                        <option selected>% off</option>
                                        <option value="1">flat off</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <span
                                        onClick={() => delProduct(ele.id)}
                                        className="btn btn-close "
                                    ></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div className="my-3 text-end">
                <Button onClick={handleProduct} variant="outlined" color="success">
                    Add Product
                </Button>
            </div>
        </div>
    );
}

export default ProductList;
