import React, { useState, useEffect  } from 'react';
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

  return (
    <div>
      {Conteudo?.map(({ _id, linkRedirecionamento, descricaoConteudo, autor, data, imagem, tipoConteudo}) => (
        <div className="main-content" key={_id}>
        
        </div>
        ))}
    </div>
    );
  }

  export default Conteudo;