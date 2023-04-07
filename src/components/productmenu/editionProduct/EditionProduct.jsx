import { useSelector } from "react-redux";
import EditionProductCSS from "./editionProduct.module.css";
import { useState } from "react";

function EditionProduct({ closeEdit, delProduct, handleModifyProduct }) {
  const product = useSelector((state) => state.editionMemory);

  let initialProduct = {
    codigo: product.codigo,
    descripcion: product.descripcion,
    imagen: product.imagen,
    listaDePrecios: product.listadeprecios,
    productoParaLaVenta: product.productoparalaventa,
    porcentajeIva: product.porcentajeiva,
  };
  const [newProduct, setNewProduct] = useState(initialProduct);

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={EditionProductCSS.container}>
      <form onSubmit={(e) => handleModifyProduct(e, newProduct)}>
        <h1>MODIFICAR PRODUCTO</h1>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="codigo">CODIGO:</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ingrese el Codigo..."
            name="codigo"
            value={newProduct.codigo}
            readOnly
          ></input>
        </div>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="descripcion">DESCRIPCION:</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ingrese la Descripcion..."
            name="descripcion"
            value={newProduct.descripcion}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="listaDePrecios">LISTA DE PRECIOS:</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ingrese lista de precios..."
            name="listaDePrecios"
            value={newProduct.listaDePrecios}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="imagen">URL DE LA IMAGEN:</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ingrese URL de imagen..."
            name="imagen"
            value={newProduct.imagen}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="productoParaLaVenta">DISPONIBLE S/N:</label>
          <input
            input="text"
            autoComplete="off"
            maxLength="1"
            placeholder="Disponible para la venta? (S/N)..."
            name="productoParaLaVenta"
            value={newProduct.productoParaLaVenta}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={EditionProductCSS.containerLineInput}>
          <label htmlFor="porcentajeIva">PORCENTAJE DE IVA:</label>
          <input
            type="number"
            autoComplete="off"
            placeholder="Ingrese el porcentaje de IVA..."
            name="porcentajeIva"
            value={newProduct.porcentajeIva}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={EditionProductCSS.containerButtons}>
          <button>Modificar</button>
          <button onClick={() => delProduct(newProduct.codigo)}>Borrar</button>
          <button onClick={(e) => closeEdit(e)}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
export { EditionProduct };
