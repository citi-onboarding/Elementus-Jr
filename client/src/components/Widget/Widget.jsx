import React from "react";
import "./Widget.css";
import chatbox from "./conversation.svg"

function Widget(){
    const NumeroTelefone = "https://wa.me/558192500616"
    return(
        <div className="backgroundWidget">
            <button className="buttonWidget" onClick={()=> window.open(NumeroTelefone)}> <img src={chatbox} alt=""/> </button>
        </div>
    )
};

export default Widget;