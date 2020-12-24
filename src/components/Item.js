import React, { useState, useEffect } from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

export default function Item({ producto }) {
  return (
    <div className="itemCard">
      {producto.nombre}
      <br />
      <img src={`/${producto.imagen}`} />
      <br />
      {producto.precio}
      <br />
      <button><Link to={`/item/${producto.id}`}>  Ver más </Link> </button>
    </div>
  );
}
