import AddProductCSS from "./AddProduct.module.css";
import { useState } from "react";

function AddProduct({ toggleAdd, handleAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    codigo: "",
    descripcion: "",
    listaDePrecios: "",
    urlImagen: "",
    productoParaLaVenta: "",
    porcentajeIva: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className={AddProductCSS.container}>
      <form onSubmit={(e) => handleAddProduct(e, newProduct)}>
        <h1>CREAR PRODUCTO</h1>
        <input
          type="text"
          autoComplete="off"
          placeholder="Ingrese el Codigo..."
          name="codigo"
          value={newProduct.codigo}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          autoComplete="off"
          placeholder="Ingrese la Descripcion..."
          name="descripcion"
          value={newProduct.descripcion}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          autoComplete="off"
          placeholder="Ingrese lista de precios..."
          name="listaDePrecios"
          value={newProduct.listaDePrecios}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          autoComplete="off"
          placeholder="Ingrese URL de imagen..."
          name="urlImagen"
          value={newProduct.urlImagen}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          input="text"
          autoComplete="off"
          maxLength="1"
          placeholder="Disponible para la venta? (S/N)..."
          name="productoParaLaVenta"
          value={newProduct.productoParaLaVenta}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="number"
          autoComplete="off"
          placeholder="Ingrese el porcentaje de IVA..."
          name="porcentajeIva"
          value={newProduct.porcentajeIva}
          onChange={(e) => handleChange(e)}
        ></input>

        <div className={AddProductCSS.containerButtons}>
          <button>Agregar</button>
          <button onClick={(e) => toggleAdd(e)}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export { AddProduct };

// import AddProductCSS from './AddProduct.module.css';
// import {useState} from "react";

// function AddProduct ({toggleAdd, handleAddProduct}) {

//         const [newProduct, setNewProduct] = useState({
//                             codigo:"",
//                             descripcion: "",
//                             listaDePrecios:"",
//                             urlImagen: "",
//                             productoParaLaVenta: "",
//                             porcentajeIva: ""
//         })

//         const handleChange = (e)=> {
//                             setNewProduct({...newProduct,
//                             [e.target.name]: e.target.value
//                             })
//         }

//         return(
//         <div className={AddProductCSS.container}>
//             <form onSubmit={e=>handleAddProduct(e, newProduct)}>
//                <input
//                     type="text"
//                     autoComplete="off"
//                     placeholder="Ingrese el Codigo..."
//                     name="codigo"
//                     value={newProduct.codigo}
//                     onChange={e=>handleChange(e)}
//                ></input>
//                <input
//                     type="text"
//                     autoComplete="off"
//                     placeholder="Ingrese la Descripcion..."
//                     name="descripcion"
//                     value={newProduct.descripcion}
//                     onChange={e=>handleChange(e)}
//                ></input>
//                <input
//                     type="text"
//                     autoComplete="off"
//                     placeholder="Ingrese lista de precios..."
//                     name="listaDePrecios"
//                     value={newProduct.listaDePrecios}
//                     onChange={e=>handleChange(e)}
//                ></input>
//                <input
//                     type="text"
//                     autoComplete="off"
//                     placeholder="Ingrese URL de imagen..."
//                     name="urlImagen"
//                     value={newProduct.urlImagen}
//                     onChange={e=>handleChange(e)}
//                ></input>
//                <input
//                     input="text"
//                     autoComplete="off"
//                     maxLength="1"
//                     placeholder="Disponible para la venta? (S/N)..."
//                     name="productoParaLaVenta"
//                     value={newProduct.productoParaLaVenta}
//                     onChange={e=>handleChange(e)}
//                ></input>
//                <input
//                     type="number"
//                     autoComplete="off"
//                     placeholder="Ingrese el porcentaje de IVA..."
//                     name="porcentajeIva"
//                     value={newProduct.porcentajeIva}
//                     onChange={e=>handleChange(e)}
//                ></input>

//                <div className={AddProductCSS.containerButtons}>
//                     <button
//                         // onClick={x=>handleAddProduct()}
//                         >Agregar
//                     </button>
//                     <button
//                         onClick={e=>toggleAdd(e)}
//                         >Cancelar
//                     </button>
//                </div>

//             </form>

//         </div>)
// }

// export {AddProduct}
