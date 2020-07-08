import React from "react";
import "./Navbar.css";
import logo from "./logo.png"
import botao from "./botao.png"


function Navbar(){
    const navbar = document.getElementsByClassName("navbar")
    const img = document.getElementsByClassName("img")

    window.onscroll = scroll;

    function scroll () {
        if(window.scrollY === 0) {
            if (navbar[0].classList.contains("navbarScrolled")){
                navbar[0].classList.remove("navbarScrolled")
                navbar[0].classList.add("navbar");
            }
            //console.log(window.scrollY)    
         } else {
            navbar[0].classList.add("navbarScrolled");
            img[0].classList.add("imgScrolled")
        }
    };
    return(
        <div>
            <ul className="navbar">
                <a href="#banner">
                    <img src={logo} alt="Logo Elementus" className="img"/>
                </a>
                <li><a className="link" href="#contato">Contato</a></li>
                <li><a className="link" href="#conteudo">Conteúdo</a></li>
                <li><a className="link" href="#depoimentos">Depoimentos</a></li>
                <li><a className="link" href="#servicos">Serviços</a></li>
                <li><a className="link" href="#inicio">Início</a></li>
            </ul>
            <div className="botao">
                <img className="imgBotao" src={botao} alt=""/>
            </div>
            <div id="banner">
            </div>
            <div id="inicio">
                <h1>Inicio</h1>
            </div>
            <div id="servicos">
                <h1>Servicos</h1>
            </div>
            <div id="depoimentos">
                <h1>Depoimentos</h1>
            </div>
            <div id="conteudo">
                <h1>Conteudo</h1>
            </div>
            <div id="contato">
                <h1>Contato</h1>
            </div>
        </div>
    );
};

export default Navbar;