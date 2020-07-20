import React from "react";
import "./Contato.css";
import imgContato from "./Contato.png";   
import axios from "axios";


function Contato(){
    async function sendMail() {
        const nome = document.getElementById('inputName').value
        const nomeEmpresa = document.getElementById('inputNameEmpresa').value
        const email = document.getElementById('inputEmail').value
        const telefone = document.getElementById('inputTelefone').value
        const mensagem = document.getElementById('inputMensagem').value
        const req = {
            nome: nome,
            nomeEmpresa: nomeEmpresa,
            email: email,
            telefone: telefone,
            mensagem: mensagem,
        }
        const res = await axios.post("http://localhost:3001/api/contato", req);
        console.log(res);
        };
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
                        <input id="inputName" className="inputName" type="text" placeholder="Nome"/>
                        <input id="inputNameEmpresa" className="inputNameEmpresa" type="text" placeholder="Nome da Empresa"/>
                        <input id="inputEmail" className="inputEmail" type="email" placeholder="E-mail"/>
                        <input id="inputTelefone" className="inputTelefone" type="Number" placeholder="Telefone"/>
                        <textarea id="inputMensagem" className="inputMensagem" type="Textarea" placeholder="Mensagem"/>
                    </div>
                    <button onClick={sendMail}className="buttonEnviar">Enviar</button>
                </div>
            </div>
        </div>
    )
};

export default Contato;