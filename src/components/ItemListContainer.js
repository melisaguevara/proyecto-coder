import React, { useState, useEffect } from "react";
import { listaProductos } from "./assets/productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { categoryid } = useParams();
  console.log(categoryid);

  const promesaProductos = new Promise((resolve, reject) => {
    setTimeout(() => resolve(listaProductos), 500);
  });

  const llamadoProductos = () => {
    promesaProductos.then((respuesta) => {
      if (categoryid) {
        const productosPorCategoria = respuesta.filter(
          (producto) => producto.categoria === categoryid
        );
        setProductos(productosPorCategoria);
      } else {
        setProductos(respuesta);
      }
    });
  };

  useEffect(() => llamadoProductos(), [categoryid]);

  return productos.length > 0 ? (
    <ItemList productos={productos} />
  ) : (
    "Cargando..."
  );
}
