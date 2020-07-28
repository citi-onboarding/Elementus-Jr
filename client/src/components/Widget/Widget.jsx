import React, {useState} from "react";
import "./Widget.css";
import chatbox from "./conversation.svg"

function Widget(){
    const number = "558192500616";
    const [msg, setMsg] = useState("");
    const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;
    
    const SalvarMensagem = (e)=>{
        setMsg(e.target.value)
    };

    return(
        <div className="backgroundWidget">
            <div className="widgetTextBox">
                <h1 className="TituloTextBox">Há algo em que podemos te ajudar? Entre em contato conosco via WhatsApp</h1>
                <div className="Msg-Button-Textbox">
                    <textarea onChange={SalvarMensagem} className="MsgTextBox" placeholder="Mensagem"></textarea>
                    <button onClick={()=> window.open(target)} className="ButtonTextBox">
                        Enviar
                    </button>
                </div>
            </div>
            <button className="buttonWidget" /*onClick={()=> window.open(target)}*/> <img src={chatbox} alt=""/> </button>
        </div>
    )
};

export default Widget;