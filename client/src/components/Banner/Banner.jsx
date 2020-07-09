import React, { useState, useEffect  } from 'react';
import '.\\Banner.css';
import axios from 'axios';
import {
  Button
} from '..\\..\\components';


function Banner() {
  const [Banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <div>
      {Banner?.map(({ _id, titulo, descricao, imagem}) => (
        <div key={_id}>
          <div className="Banner">  
            <img src= {imagem[0]?.url} className="Banner-image"/>
          </div>
          <div className="Texts">
            <p className="Title">{titulo}</p>
            <p className="Description">{descricao}</p>
            <Button Title="Contate-nos" buttonColor="#00005A" buttonSize= "200px"/>
          </div>  
        </div>
        ))}
    </div>
    );
  }

  export default Banner;