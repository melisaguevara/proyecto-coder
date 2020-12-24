import React, { useState, useEffect } from "react";
import "./ItemCount.css"

export default function ItemCount(props) {
  const [cantidad, setCantidad] = useState(props.initial);

  const sumar = () => {
    if (cantidad < props.stock) {
      setCantidad(cantidad + 1);
    } else {
      alert("No hay más stock");
    }
  };

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <><div>
      <button onClick={restar}>-</button>
      <span className="cantidad">{cantidad}</span>
      <button onClick={sumar}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </>
  );
}
