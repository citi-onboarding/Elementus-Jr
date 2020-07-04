import React from "react";
import "./Banner.css";
import imgBanner from "./imgBanner/banner.png"
import imgLogo from "./imgBanner/logoElementus.png"

function Banner(){
    return(
        <div>
            <section className = "Header">
                <div className= "logoTexto">
                    <section>
                        <img className = "imgLogo" src={imgLogo} alt=""/>
                    </section>

                    <section className="texto">
                        <h1 className="titulo">Nós transformamos sua ideia em solução</h1>
                        <p className="descricao">Por meio de processos modernos e um time engajado e preparado, conseguimos impulsionar seu negício!</p>
                    </section>
                </div>
                <section>
                    <img className = "imgBanner"src={imgBanner} alt=""/>
                </section>
            </section>
        </div>
    )
}

export default Banner;