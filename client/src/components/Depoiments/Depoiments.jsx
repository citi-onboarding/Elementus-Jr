import React, { useState, useEffect } from 'react';
import '.\\Depoiments.css';
import Slider from "react-slick";
import axios from 'axios';
import {
  DepoimentsCard
} from '..\\..\\components';

function Depoiments() {
  
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerPadding: "60px",
  };

  const [depoiments, setDepoiments] = useState([]);



  const loadDepoiments = async () => {
    const res = await axios.get('http://localhost:3001/api/depoiments');
    setDepoiments(res.data);
  };

  useEffect(() => {
    loadDepoiments();
  }, []);

  return (
    <main id="depoimentos" className="depoiments">
      <div className="depoiments-card">
        <div className="depoiments-top">
          <p id="depoiments-description">- Saiba quem trabalhou conosco e o que ele(a) achou da experiência</p>
          <p id="depoiments-title">Depoimentos e cases</p>
        </div>
        <Slider {...settings} className="Slider">
          {depoiments?.map(({ _id, ClientName, CompanyFunction, Depoiment, Facebook, Linkedin, Instagram, image }) => (
              <DepoimentsCard _id={_id} ClientName={ClientName} CompanyFunction={CompanyFunction} Depoiment={Depoiment} image={image} Facebook={Facebook} Linkedin={Linkedin} Instagram={Instagram} />
          ))}
        </Slider>
      </div>
      <div className="blank-space-depoiments"> </div>
    </main>
    
  );
}

export default Depoiments;