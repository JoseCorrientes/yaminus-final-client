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
} from "../actions/actionNames";

const initialState = {
  step: "",
  toEncrypt: "",
  toDecrypt: "",
  products: [],
  reload: false,
  addMenu: false,
  editionMenu: false,

  editionMemory: {
    codigo: "",
    descripcion: "",
    listaDePrecios: "",
    urlImagen: "",
    productoParaLaVenta: "",
    porcentajeIva: "",
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TODECRYPT: {
      return {
        ...state,
        toDecrypt: action.payload.data.result,
      };
    }

    case TOENCRYPT: {
      return {
        ...state,
        toEncrypt: action.payload.data.result,
      };
    }

    case GETPRODUCTS: {
      return {
        ...state,
        products: action.payload.data,
      };
    }

    case DELETEPRODUCTS: {
      return {
        ...state,
        reload: action.payload,
      };
    }

    case TOGGLEADDVISIBLE: {
      return {
        ...state,
        addMenu: action.payload,
      };
    }

    case TOGGLEEDITVISIBLE: {
      return {
        ...state,
        editionMenu: action.payload,
      };
    }

    case PRODUCTTOMEMORY: {
      return {
        ...state,
        editionMemory: action.payload,
      };
    }

    case ADDPRODUCT: {
      return {
        ...state,
        reload: action.payload,
      };
    }

    case MODIFYPRODUCT: {
      return {
        ...state,
        reload: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
