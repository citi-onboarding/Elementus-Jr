import React, { useState } from "react";
import "./Contato.css";
import imgContato from "./Contato.png";
import axios from "axios";

function Contato() {
  const [nome, setNome] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [popupEnvio, setPopupEnvio] = useState("popup-enviado-desactived");
  const [botaoPopup, setBotaoPopup] = useState("botaopopup-desactived");
  const [popupErro, setPopupErro] = useState("popup-erro-desactived");
  const [botaoPopupErro, setBotaoPopupErro] = useState(
    "botaopopup-erro-desactived"
  );

  const boxEscrita1 = (e) => {
    setNome(e.target.value);
  };
  const boxEscrita2 = (e) => {
    setNomeEmpresa(e.target.value);
  };
  const boxEscrita3 = (e) => {
    setEmail(e.target.value);
  };
  const boxEscrita4 = (e) => {
    setTelefone(e.target.value);
  };
  const boxEscrita5 = (e) => {
    setMensagem(e.target.value);
  };

  function avisoEnviado() {
    setPopupErro("popup-erro-desactived");
    setBotaoPopupErro("botaopopup-erro-desactived");
    setPopupEnvio("popup-enviado");
    setBotaoPopup("botaopopup");
  }

  function avisoErro() {
    setPopupEnvio("popup-enviado-desactived");
    setBotaoPopup("botaopopup-desactived");
    setPopupErro("popup-erro");
    setBotaoPopupErro("botaopopup-erro");
  }

  async function sendMail() {
    if (
      nome === "" ||
      nomeEmpresa === "" ||
      email === "" ||
      telefone === "" ||
      mensagem === ""
    ) {
      avisoErro();
    } else {
      const req = {
        nome: nome,
        nomeEmpresa: nomeEmpresa,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
      };
      const res = await axios.post("http://localhost:3001/api/contato", req);
      avisoEnviado();
    }
  }

  return (
    <section id="contato" className="background">
      <div className="background1">
        <img className="imgContato" src={imgContato} alt="" />
      </div>
      <div className="background2">
        <div className="cantainerInfo">
          <p className="descricao1">- Estamos à disposição para te atender</p>
          <p className="descricao2">Contate-nos</p>
          <p className="descricao3">
            Após enviada a mensagem, um de nossos consultores irá entrar em
            contato o mais rápido possível.
          </p>

          <div className="caixaInput">
            <input
              onChange={boxEscrita1}
              className="inputName"
              type="text"
              placeholder="Nome"
            />
            <input
              onChange={boxEscrita2}
              className="inputNameEmpresa"
              type="text"
              placeholder="Nome da Empresa"
            />
            <input
              onChange={boxEscrita3}
              className="inputEmail"
              type="email"
              placeholder="E-mail"
            />
            <input
              onChange={boxEscrita4}
              className="inputTelefone"
              type="text"
              placeholder="Telefone"
            />
            <textarea
              onChange={boxEscrita5}
              className="inputMensagem"
              type="Textarea"
              placeholder="Mensagem"
            />
          </div>
          <button
            onClick={() => {
              sendMail();
            }}
            className="buttonEnviar"
          >
            Enviar
          </button>
        </div>
      </div>
      <div className={popupEnvio}>
        <button
          onClick={() => {
            setPopupEnvio("popup-enviado-desactived");
            setBotaoPopup("botaopopup-desactived");
          }}
          className={botaoPopup}
        >
          Mensagem enviada com sucesso!
        </button>
      </div>
      <div className={popupErro}>
        <button
          onClick={() => {
            setPopupErro("popup-erro-desactived");
            setBotaoPopupErro("botaopopup-erro-desactived");
          }}
          className={botaoPopupErro}
        >
          Cheque se esqueceu algo, nao enviado!
        </button>
      </div>
    </section>
  );
}

export default Contato;
