import React from "react";
import "./Column.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Prod from "../products/Prod";

const Column = ({
  prod,
  setProd,
  addDiscount,
  delProduct,
  show,
  setShow,
  setInputId,
  delVariant,
}) => {
  return (
    <div className="column">
      <SortableContext items={prod} strategy={verticalListSortingStrategy}>
        {
          prod.map((ele, index) => (
          <Prod
            key={ele.id}
            {...ele}
            index={index}
            addDiscount={addDiscount}
            delProduct={delProduct}
            show={show}
            setShow={setShow}
            setInputId={setInputId}
            pl={prod.length}
            delVariant={delVariant}
            prod={prod}
            setProd={setProd}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
