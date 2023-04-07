import GridCardCSS from "./GridCard.module.css";

// function GridCard ({codigo, descripcion, listadeprecios, imagen, productoparalaventa, porcentajeiva, editProduct, delProduct}){
function GridCard({
  codigo,
  descripcion,
  listadeprecios,
  imagen,
  productoparalaventa,
  porcentajeiva,
  openEdit,
  delProduct,
}) {
  return (
    <div
      className={GridCardCSS.container}
      onDoubleClick={() =>
        openEdit(
          codigo,
          descripcion,
          listadeprecios,
          imagen,
          productoparalaventa,
          porcentajeiva
        )
      }
    >
      <p>Codigo: {codigo}</p>
      <p>Descripción: {descripcion}</p>
      <p>Lista de Precios: {listadeprecios}</p>
      <p>Imagen: {imagen}</p>
      <p>Producto Para la Venta: {productoparalaventa ? "Si" : "No"}</p>
      <p>Porcentaje de Iva: {porcentajeiva}</p>
      <button onClick={() => delProduct(codigo)}>X</button>
    </div>
  );
}

export { GridCard };
