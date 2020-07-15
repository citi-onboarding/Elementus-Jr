import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import botao from "./botao.png";
import botaoX from "./botaoX.png";


function Navbar(){
    const navbar = document.getElementsByClassName("navbar");
    const img = document.getElementsByClassName("img");
    const secondBackground = document.getElementById("secondBackground");
    const [imgButton, setImgButton] = useState(botao);


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

    
    function closeSidebar(){
        const secondBackground = document.getElementById("secondBackground");
        const lateralNavbar = document.getElementById("lateralNavbarId");
        secondBackground.classList.remove("secondBackgroundActived");
        secondBackground.classList.add("secondBackground");
        lateralNavbar.classList.remove("lateralNavbarActived");
        lateralNavbar.classList.add("lateralNavbar");
        setImgButton(botao);
    };


    if(secondBackground != null){
        let lateralNavbar = document.getElementById("lateralNavbarId");
        secondBackground.addEventListener("click", function(){
            secondBackground.classList.remove("secondBackgroundActived");
            secondBackground.classList.add("secondBackground");
            lateralNavbar.classList.remove("lateralNavbarActived");
            lateralNavbar.classList.add("lateralNavbar");
            setImgButton(botao);
        });
    };


    function lateralNavbar() {
        const secondBackground = document.getElementById("secondBackground");
        const lateralNavbar = document.getElementById("lateralNavbarId");



        if(!(secondBackground.classList.contains("secondBackgroundActived"))){
            secondBackground.classList.remove("secondBackground");
            secondBackground.classList.add("secondBackgroundActived");
            lateralNavbar.classList.remove("lateralNavbar");
            lateralNavbar.classList.add("lateralNavbarActived");
            setImgButton(botaoX);

        }
        else if(secondBackground.classList.contains("secondBackgroundActived") && (secondBackground.classList.length === 1) ){
            secondBackground.classList.remove("secondBackgroundActived");
            secondBackground.classList.add("secondBackground");
            lateralNavbar.classList.remove("lateralNavbarActived");
            lateralNavbar.classList.add("lateralNavbar");
            setImgButton(botao);
        }
        else if(secondBackground.classList.length === 2){
            secondBackground.classList.remove("secondBackground")
            lateralNavbar.classList.remove("lateralNavbar");
            lateralNavbar.classList.add("lateralNavbarActived");
        };
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
            
            <ul id="lateralNavbarId" className="lateralNavbar">
                
                <li><button className="buttonSidebar" onClick={closeSidebar}><a className="linkLateral" href="#inicio">Início</a></button></li>
                <li><button className="buttonSidebar" onClick={closeSidebar}><a className="linkLateral" href="#servicos">Serviços</a></button></li>
                <li><button className="buttonSidebar" onClick={closeSidebar}><a className="linkLateral" href="#depoimentos">Depoimentos</a></button></li>
                <li><button className="buttonSidebar" onClick={closeSidebar}><a className="linkLateral" href="#conteudo">Conteúdo</a></button></li>
                <li><button className="buttonSidebar" onClick={closeSidebar}><a className="linkLateral" href="#contato">Contato</a></button></li>
            </ul>

            <div className="botao">
                <button onClick={lateralNavbar} className="actionBotao"></button>
                <img className="imgBotao" src={imgButton} alt=""/>
            </div>

            <div id="secondBackground" className="secondBackground"></div>

            <div id="banner">
            </div>
        </div>
    );
};

export default Navbar;