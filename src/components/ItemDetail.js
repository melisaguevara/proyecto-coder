import React, { useState, useEffect } from "react";
import "./Item.css";
import ItemCount from "./ItemCount"
import "./ItemDetail.css"

export default function ItemDetail({ producto }) {
  return (
    <div className="itemDetail">
      {producto.nombre}
      <br />
      <img src={`/${producto.imagen}`}/>
      <br/>
      {producto.precio}
      <br />
      {producto.descripcion}
      <br />
        <ItemCount stock={producto.stock} initial={1}/>
    </div>
  );
}
