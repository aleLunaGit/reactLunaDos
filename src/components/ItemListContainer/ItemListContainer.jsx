import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {gFetch} from "../../utils/gFetch.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idTipo } = useParams();

  useEffect(() => {
    if(idTipo) {
    gFetch()
    .then(res => {      
      setProductos(res.filter(producto => producto.tipo === idTipo))
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))      
} else {
  gFetch()
    .then(res => {      
      setProductos(res)
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
  
}
}, [idTipo]);

console.log(idTipo)

  return loading == null 
    ? 
  (
    <h2>Aguarde por favor</h2>
  ) 
    : 
  (
    <div className="d-flex flex-wrap justify-content-evenly">
          {productos.map(p => (
            <div key={p.id} className="card w-25 mt-2">
              <Link to={`/detalle/${p.id}`}>
                <div className="card-header">
                  Nombre: {p.nombre}</div>
                <div className="card-body">
                  <img src= "../" alt="foto" className="w-100" />
                  Categoria: {p.tipo}
                  <br />
                  Precio: {p.precio}
                </div>
                <div className="card-footer">
                </div>
              </Link>
            </div>
          ))
          }
    </div>
  );
};

export default ItemListContainer;
