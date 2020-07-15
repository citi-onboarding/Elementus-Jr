import React, { useState, useEffect } from 'react';
import '.\\Services.css';
import Slider from "react-slick";
import axios from 'axios';
import {
  ServicesCard
} from '..\\..\\components';


function Services() {
  const settings = {
    arrows: true,
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
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
            <ServicesCard _id={_id} Title={Title} Description={Description} image={image[0]} Link={Link} />))}
        </Slider>
      </div>
    </main>
  );
}

// {services?.map(({ _id, Title, Description, image, Link }) => (









export default Services;