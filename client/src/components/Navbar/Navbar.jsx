import React from "react";
import "./Navbar.css";
import logo from "./logo.png"
import botao from "./botao.png"


function Navbar(){
    const navbar = document.getElementsByClassName("navbar");
    const img = document.getElementsByClassName("img");

    window.onscroll = scroll;

    function scroll () {
        if(window.scrollY === 0) {
            if (navbar[0].classList.contains("navbarScrolled")){
                navbar[0].classList.remove("navbarScrolled");
                navbar[0].classList.add("navbar");
                img[0].classList.remove("imgScrolled");
                img[0].classList.add("img");
            }
         } else {
            navbar[0].classList.add("navbarScrolled");
            img[0].classList.add("imgScrolled");
        }
    }

    function lateralNavbar() {
        const secondBackground = document.getElementById("secondBackground")
        secondBackground.classList.remove("secondBackground")
        secondBackground.classList.add("secondBackgroundActived")
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
                <button onClick={lateralNavbar} className="actionBotao"></button>
                <img className="imgBotao" src={botao} alt=""/>
            </div>

            <div id="secondBackground"></div>
        
            <div id="banner">
            </div>
        </div>
    );
};

export default Navbar;