import React, { useState, useEffect } from 'react';
import '.\\Conteudo.css';
import axios from 'axios';
import {
  Button
} from '..';


function Conteudo() {
  const [Conteudo, setConteudo] = useState([]);

  const loadConteudo = async () => {
    const res = await axios.get('http://localhost:3001/api/conteudo');
    setConteudo(res.data);

  };

  useEffect(() => {
    loadConteudo();
  }, []);
  console.log(Conteudo)




  return (
    <div>
      <div className="top">
        <p>Aprenda mais sobre a indústria alimentícia</p>
        <h1 className="Conteudo-title">Conteúdo</h1>
      </div>
      <div className="diagonal">
        <div className="container">
          {Conteudo?.map(({ _id, linkRedirecionamento, descricaoConteudo, autor, imagem, tipoConteudo, data }) => (
            <div key={_id} className="Card">
              <div>
                <div className="image-box">
                  {tipoConteudo === "Artigo" ? (<div className="blue"> </div>) : (<div className="yellow"> </div>)}
                  <img src={imagem.url} className="card-image" />
                </div>
              </div>
              <div className="btn">{tipoConteudo === "Artigo" ?
                (<Button Title="Acesse" buttonColor="#FFDC00" buttonSize="120px" />)
                : (<Button Title="Baixe" buttonColor="#00005A" buttonSize="120px" />)}
              </div>
              <div className="Text-box">
                <p className="type">{tipoConteudo}</p>
                <h1 className="description">{descricaoConteudo}</h1>
              </div>
              <div className="bottom">
                <div><p>{autor.first} {autor.last}</p></div>
                <div><p>02/05/2001</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="foot">
        <p>Caso deseje obter conteúdo no seu e-mail, clique aqui e inscreva-se na nossa newsletter</p>
      </div>
    </div>

  );
}

export default Conteudo;
