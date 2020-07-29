import React, { useState, useEffect } from "react";
import ".\\Banner.css";
import axios from "axios";
import { Button } from "..\\..\\components";

function Banner() {
  const [Banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get("http://localhost:3001/api/banner");
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <div className="inicio" id="inicio">
      {Banner?.map(({ _id, titulo, descricao, imagem }) => (
        <div className="main-content" key={_id}>
          <div className="container-banner"></div>
          <div className="Texts-banner">
            <div className="title-content">
              {titulo.split(" ").map((text) => (
                <p className="Title-banner">{text} </p>
              ))}
            </div>
            <p className="Description-banner">{descricao}</p>
            <a href="#contato">
              <Button
                Title="Contate-nos"
                buttonColor="#00005A"
                buttonSize="180px"
                buttonTextColor="white"
              />
            </a>
          </div>

          <div className="Banner">
            <div className="gradient"> </div>
            <img src={imagem[0]?.url} className="Banner-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
