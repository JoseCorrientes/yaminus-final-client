import axios from "axios";
import {
  TODECRYPT,
  TOENCRYPT,
  GETPRODUCTS,
  DELETEPRODUCTS,
  TOGGLEADDVISIBLE,
  TOGGLEEDITVISIBLE,
  ADDPRODUCT,
  PRODUCTTOMEMORY,
  MODIFYPRODUCT,
} from "./actionNames";

export function decrypt(data) {
  return async function (dispatch) {
    try {
      let result = await axios.post("http://localhost:3001/decrypt", data);
      return dispatch({
        type: TODECRYPT,
        payload: result,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
export function encrypt(data) {
  return async function (dispatch) {
    try {
      let result = await axios.post("http://localhost:3001/encrypt", data);
      return dispatch({
        type: TOENCRYPT,
        payload: result,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getProduct() {
  return async function (dispatch) {
    try {
      let result = await axios.get("http://localhost:3001/getProduct");
      return dispatch({
        type: GETPRODUCTS,
        payload: result,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteProduct(data) {
  return async function (dispatch) {
    try {
      let result = await axios.delete(
        `http://localhost:3001/deleteProduct?codigo=${data}`
      );
      return dispatch({
        type: DELETEPRODUCTS,
        payload: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function toggleAddVisible(data) {
  return function (dispatch) {
    return dispatch({
      type: TOGGLEADDVISIBLE,
      payload: data,
    });
  };
}

export function toggleEditVisible(data) {
  return function (dispatch) {
    return dispatch({
      type: TOGGLEEDITVISIBLE,
      payload: data,
    });
  };
}

export function saveProductMemory(data) {
  return function (dispatch) {
    return dispatch({
      type: PRODUCTTOMEMORY,
      payload: data,
    });
  };
}

export function addProductDB(data) {
  return async function (dispatch) {
    const result = await axios.post("http://localhost:3001/addProduct", data);

    return dispatch({
      type: ADDPRODUCT,
      payload: result.data,
    });
  };
}

export function modifyProductDB(data) {
  return async function (dispatch) {
    const result = await axios.put("http://localhost:3001/modifyProduct", data);
    return dispatch({
      type: MODIFYPRODUCT,
      payload: result.data,
    });
  };
}
