import React, { useState, useEffect } from 'react';
import '.\\Services.css';
import Slider from "react-slick";
import axios from 'axios';
import {
  ServicesCard
} from '..\\..\\components';

function Services() {
  const [centerTitle, setCenterTitle] = useState("");

  setInterval(() => {
    if(document.querySelector(".slick-active h1")){
      setCenterTitle(document.querySelector(".slick-active h1").innerText);
    }
  }, 500);

  const settings = {
    arrows: true,
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "350px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  const [services, setServices] = useState([]);


  
  const loadServices = async () => {
    const res = await axios.get('http://localhost:3001/api/services');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <main className="Services">
      <div className="Services-card">
        <h2>Center Mode</h2>
        <Slider {...settings} className="Slider">
          {services?.map(({ _id, Title, Description, image, Link }) => (
            centerTitle === Title?(
                <ServicesCard _id={_id} Title={Title} isCenter={true} Description={Description} image={image[0]} Link={Link} />
              ):(
                <ServicesCard _id={_id} Title={Title} isCenter={false} Description={Description} image={image[0]} Link={Link} />
              )
            ))}
        </Slider>
      </div>
    </main>
  );
}

// {services?.map(({ _id, Title, Description, image, Link }) => (









export default Services;