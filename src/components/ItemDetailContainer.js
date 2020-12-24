import React, { useState, useEffect } from "react";
import { listaProductos } from "./assets/productos";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {

  const [producto, setProducto] = useState();

  const { itemid } = useParams()

  const promesaProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoClickeado = listaProductos.find( producto => producto.id == itemid )
      resolve(productoClickeado);
    }, 500);
  });

  const llamadoProducto = () => {
    promesaProducto.then((respuesta) => setProducto(respuesta));
  };

  useEffect(() => llamadoProducto(), []);

  return producto ? (
    <ItemDetail producto={producto} />
  ) : (
    "Cargando..."
  );
}
