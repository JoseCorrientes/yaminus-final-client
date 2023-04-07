import { useSelector } from "react-redux";
import { GridCard } from "../grid/GridCard";
import ProductGridCSS from "./ProductGrid.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getProduct,
  deleteProduct,
  toggleAddVisible,
  toggleEditVisible,
  addProductDB,
  saveProductMemory,
  modifyProductDB,
} from "../../../actions/actions";
import { AddProduct } from "../addproduct/AddProduct";
import { EditionProduct } from "../editionProduct/EditionProduct";
import { Link } from "react-router-dom";

function ProductGrid() {
  let productsLocal = [];

  const dispatch = useDispatch();
  const reload = useSelector((state) => state.reload);
  const addMenuVisible = useSelector((state) => state.addMenu);
  const editionMenuVisible = useSelector((state) => state.editionMenu);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, [reload]);

  productsLocal = useSelector((state) => state.products);

  function delProduct(e) {
    dispatch(deleteProduct(e));
  }

  function toggleAdd() {
    let data = addMenuVisible === true ? false : true;
    dispatch(toggleAddVisible(data));
  }

  function openEdit(
    codigo,
    descripcion,
    listadeprecios,
    imagen,
    productoparalaventa,
    porcentajeiva
  ) {
    console.log(
      codigo,
      descripcion,
      listadeprecios,
      imagen,
      productoparalaventa,
      porcentajeiva
    );
    dispatch(
      saveProductMemory({
        codigo,
        descripcion,
        listadeprecios,
        imagen,
        productoparalaventa,
        porcentajeiva,
      })
    );
    dispatch(toggleEditVisible(true));
  }

  function closeEdit() {
    dispatch(toggleEditVisible(false));
  }

  function handleAddProduct(e, newProduct) {
    e.preventDefault();
    dispatch(addProductDB(newProduct));
    dispatch(toggleAddVisible(false));
  }

  function handleModifyProduct(e, newProduct) {
    e.preventDefault();
    dispatch(modifyProductDB(newProduct));
    dispatch(toggleEditVisible(false));
  }

  return (
    <div className={ProductGridCSS.container}>
      <div className={ProductGridCSS.dataContainer}>
        {Array.isArray(productsLocal) === true &&
          productsLocal.map((x) => (
            <GridCard
              key={x.codigo}
              codigo={x.codigo}
              descripcion={x.descripcion}
              listadeprecios={x.listadeprecios}
              imagen={x.imagen}
              productoparalaventa={x.productoparalaventa}
              porcentajeiva={x.porcentajeiva}
              openEdit={openEdit}
              delProduct={delProduct}
            />
          ))}

        {addMenuVisible && (
          <AddProduct
            handleAddProduct={handleAddProduct}
            toggleAdd={toggleAdd}
          />
        )}

        {editionMenuVisible && (
          <EditionProduct
            // handleEditionProduct={handleAddProduct}
            // openEdit={openEdit}
            handleModifyProduct={handleModifyProduct}
            closeEdit={closeEdit}
            delProduct={delProduct}
          />
        )}
      </div>
      <div className={ProductGridCSS.containerButtons}>
        <button onClick={(x) => toggleAdd()}>+ Agregar</button>
        <Link to={"/"}>
          <button>Menu Principal</button>
        </Link>
      </div>
    </div>
  );
}

export { ProductGrid };
