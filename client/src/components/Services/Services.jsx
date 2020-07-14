import React, { useState, useEffect } from 'react';
import '.\\Services.css';
import Slider from "react-slick";
import axios from 'axios';
import {
    ServicesCard
} from '..\\..\\components';





function Services () {  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div>
          <h1></h1>
        </div>
      </Slider>
    </div>
  );
  }










  export default Services;