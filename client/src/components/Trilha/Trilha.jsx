import React, { useState, useEffect } from "react";
import "./Trilha.css";
import axios from "axios";

function Trilha(){
    const[img_1, setImg_1] = useState("");
    const[img_2, setImg_2] = useState("");
    const[windowWidth, setWindowWidth] = useState(false);

    const loadTrilha = async () => {
        const res = await axios.get("http://localhost:3001/api/trilha");
        setImg_1(res.data[0].imagem1.url);
        setImg_2(res.data[0].imagem2.url);
    };

    useEffect(() =>{
        loadTrilha();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () =>{
          setWindowWidth(window.innerWidth < 700)
        }
        );
      }, []);

    return(
        <div >
            {!windowWidth ? (
                <div >
                    <div className="titulo-descricao">
                        <p className="desc">
                            - Conheça nosso processo de consultoria
                        </p>
                        <h1 className="titulo">
                            Trilha da consultoria
                        </h1>
                    </div>
                    <img className="estiloWeb" src={img_1} alt=""/>
                </div>
            ) : (
                <div>
                    <div className="titulo-descricao">
                        <p className="desc-mobile">
                            - Conheça nosso processo de consultoria
                        </p>
                        <h1 className="titulo-mobile">
                            Trilha da consultoria
                        </h1>
                    </div>
                    <img className="estiloMobile" src={img_2} alt=""/>
                </div>
                
            )}
            
        </div>
    )
};

export default Trilha;