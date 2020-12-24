import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList(props) {
  return props.productos.map((producto) => (
    <Item key={producto.id} producto={producto} />
  ));
}
