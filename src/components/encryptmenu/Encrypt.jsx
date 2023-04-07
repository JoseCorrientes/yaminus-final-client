import { useState } from "react";
import EncryptCSS from "./Encrypt.module.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { decrypt, encrypt } from "../../actions/actions";

function Encrypt() {
  const dispatch = useDispatch();
  const [step, setStep] = useState("");
  const [toEncrypt, setToEncrypt] = useState("");
  const [toDecrypt, setToDecrypt] = useState("");
  const resultDecrypt = useSelector((state) => state.toDecrypt);
  const resultEncrypt = useSelector((state) => state.toEncrypt);

  const handleStep = (e) => {
    setStep(e.target.value);
  };
  const handleToEncrypt = (e) => {
    setToEncrypt(e.target.value);
  };
  const handleToDecrypt = (e) => {
    setToDecrypt(e.target.value);
  };

  async function handleSubmitToDecrypt(e) {
    e.preventDefault();
    let sendData = {
      step: step,
      word: toDecrypt,
    };
    dispatch(decrypt(sendData));
    setStep("");
    setToDecrypt("");
  }
  async function handleSubmitToEncrypt(e) {
    e.preventDefault();
    let sendData = {
      step: step,
      word: toEncrypt,
    };
    dispatch(encrypt(sendData));
    setStep("");
    setToEncrypt("");
  }

  return (
    <div className={EncryptCSS.container}>
      <div className={EncryptCSS.decryptContainer}>
        <input
          className={EncryptCSS.input}
          type="text"
          value={step}
          placeholder="Ingrese Pasos"
          onChange={(e) => handleStep(e)}
        />
        <input
          className={EncryptCSS.input}
          type="text"
          placeholder="Ingrese Codigo a Desencriptar"
          onChange={(e) => handleToDecrypt(e)}
          value={toDecrypt}
        />

        <p className={EncryptCSS.pResult}> {resultDecrypt}</p>
        <button
          className={EncryptCSS.button}
          onClick={(e) => handleSubmitToDecrypt(e)}
        >
          Desencriptar
        </button>
      </div>

      <div className={EncryptCSS.encryptContainer}>
        <input
          className={EncryptCSS.input}
          type="text"
          placeholder="Ingrese Pasos"
          onChange={(e) => handleStep(e)}
          value={step}
        />
        <input
          className={EncryptCSS.input}
          type="text"
          placeholder="Palabra a Encriptar"
          onChange={(e) => handleToEncrypt(e)}
          value={toEncrypt}
        />
        <p className={EncryptCSS.pResult}> {resultEncrypt}</p>
        <button
          className={EncryptCSS.button}
          onClick={(e) => handleSubmitToEncrypt(e)}
        >
          Encriptar
        </button>
      </div>
      <Link to={"/"}>
        <button className={EncryptCSS.buttonMenu}>Menu Principal</button>
      </Link>
    </div>
  );
}

export { Encrypt };
