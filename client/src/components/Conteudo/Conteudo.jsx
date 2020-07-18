import React, { useState, useEffect } from 'react';
import '.\\Conteudo.css';
import axios from 'axios';
import {
  Button
} from '..';


function Conteudo() {
  const [Conteudo, setConteudo] = useState([]);
  const[isMobile, setIsMobile] = useState(false);
<<<<<<< HEAD
=======
  const [newsletter, setNewsletter] = useState([]);

  const loadNewsletter = async () => {
    const res = await axios.get('http://localhost:3001/api/informacoes');
    setNewsletter(res.data[0].linkNewsletter);

  };

  useEffect(() => {
    loadNewsletter();
  }, []);
>>>>>>> 2694bddd79e47093b066096cb6f87262b320c723

  const loadConteudo = async () => {
    const res = await axios.get('http://localhost:3001/api/conteudo');
    setConteudo(res.data);
  };

  useEffect(() => {
    loadConteudo();
  }, []);
  console.log(Conteudo)

  useEffect(() => {
<<<<<<< HEAD
    window.addEventListener('resize', () =>{
      setIsMobile(window.innerWidth <= 1080)
=======
    setIsMobile(window.innerWidth <= 1080);
    window.addEventListener('resize', () =>{
      setIsMobile(window.innerWidth <= 1080);
>>>>>>> 2694bddd79e47093b066096cb6f87262b320c723
    }
    );
  }, []);



  return (
    <section id="conteudo" className="section-conteudo">
      <div className="background-estilo"></div>
      <div className="top">
        <p className="descricao-titulo">- Aprenda mais sobre a indústria alimentícia</p>
        <h1 className="Conteudo-title">Conteúdo</h1>
      </div>
      <div className="diagonal">
        <div className="container">
          {Conteudo?.map(({ _id, linkRedirecionamento, descricaoConteudo, autor, imagem, tipoConteudo, data }) => (
<<<<<<< HEAD
            <div key={_id} onClick = {!isMobile ? window.open(linkRedirecionamento) : () => {}} className="Card">
=======
            <div key={_id} onClick = {isMobile ? () => window.open(linkRedirecionamento) : () => {}} className="Card">
>>>>>>> 2694bddd79e47093b066096cb6f87262b320c723
              <div className="image-box">
                <div className="image-box">
                  {tipoConteudo === "Artigo" ? (<div className="blue"> </div>) : (<div className="yellow"> </div>)}
                  <img src={imagem.url} className="card-image" />
                </div>
              </div>
              <div className="btn">{tipoConteudo === "Artigo" ?
                (<Button onClick={()=> window.open(linkRedirecionamento)} Title="Acesse" buttonColor="#FFDC00" buttonSize="120px" />)
                : (<Button onClick={()=> window.open(linkRedirecionamento)} Title="Baixe" buttonColor="#00005A" buttonSize="120px" buttonTextColor="white" />)}
              </div>
              <div className="descricaoCard">
                <div className="Text-box">
                  <p className="type">{tipoConteudo}</p>
                  <h1 className="description">{descricaoConteudo}</h1>
                </div>
                <div className="bottom">
                  <div><p className="uppercase">{autor.first} {autor.last}</p></div>
                  <div><p className="dataBottom">{`${new Date(data).toLocaleDateString()}`}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="foot">
        <p className="foot-text">Caso deseje obter conteúdo no seu e-mail, <a className="link-newsletter" href={newsletter}>clique aqui</a> e inscreva-se na nossa newsletter</p>
      </div>
    </section>

  );
}

export default Conteudo;
