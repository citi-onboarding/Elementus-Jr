import React from "react";
import "./Contato.css";
import imgContato from "./Contato.png"


function Contato(){
    return(
        <div id="contato" className="background">
            <div className="background1">
                <img className="imgContato" src={imgContato} alt=""/>
            </div>
            <div className="background2">
                <div className="cantainerInfo">
                    <p className="descricao1">- Estamos à disposição para te atender</p>
                    <p className="descricao2">Contate-nos</p>
                    <p className="descricao3">Após enviada a mensagem, um de nossos consultores irá entrar em contato o mais rápido possível.</p>
                    
                    <div className="caixaInput">
                        <input className="inputName" type="text" placeholder="Nome"/>
                        <input className="inputEmail" type="email" placeholder="E-mail"/>
                        <input className="inputTelefone" type="Number" placeholder="Telefone"/>
                        <textarea className="inputMensagem" type="Textarea" placeholder="Mensagem"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contato;