import React, {useState, useEffect} from "react";
import "./Widget.css";
import chatbox from "./conversation.svg"
import enviar from "./send.svg";

function Widget(){
    const number = "558192500616";
    const [msg, setMsg] = useState("");
    const [widget, setWidget] = useState("widgetTextBoxDesactived");
    const [background, setBackground] = useState("backgroundWidgetDesactived");
    const [boxShadowWidget, setBoxShadowWidget] = useState("back-shadow-widget-desactived");
    const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;
    const backgroundWidget = document.getElementsByClassName("backgroundWidgetDesactived");

    useEffect(()=>{
        backgroundWidget[0].addEventListener("click", ()=>{setWidget("widgetTextBoxDesactived"); setBackground("backgroundWidgetDesactived"); setBoxShadowWidget("back-shadow-widget-desactived");}, false);
    }, []);
    
    
    const SalvarMensagem = (e)=>{
        setMsg(e.target.value)
    };

    return(
        <section>
            <div className={background}></div>
            <div className={widget}>
                    <h1 className="TituloTextBox">Há algo em que podemos te ajudar? Entre em contato conosco via WhatsApp</h1>
                    <div className="Msg-Button-Textbox">
                        <textarea onChange={SalvarMensagem} className="MsgTextBox" placeholder="Mensagem"></textarea>
                        <button onClick={()=> window.open(target)} className="ButtonTextBox">
                            <img className="img-button-enviar" src={enviar} alt="imagem de envio da mensagem"/>
                        </button>
                    </div>
                </div>
                <button className="buttonWidget" onClick={widget === "widgetTextBox"? (()=> [setWidget("widgetTextBoxDesactived"), setBackground("backgroundWidgetDesactived"), setBoxShadowWidget("back-shadow-widget-desactived")]) : (()=> [setWidget("widgetTextBox"), setBackground("backgroundWidget"), setBoxShadowWidget("back-shadow-widget")]) }> <img src={chatbox} alt=""/> </button>
            <div className={boxShadowWidget}></div>
        </section>
    )
};

export default Widget;