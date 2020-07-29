import React, { useState, useEffect } from "react";
import ".\\Services.css";
import Slider from "react-slick";
import axios from "axios";
import { ServicesCard } from "..\\..\\components";

function Services() {
  const [centerTitle, setCenterTitle] = useState("");

  setInterval(() => {
    if (document.querySelector(".slick-center p")) {
      setCenterTitle(document.querySelector(".slick-center p").innerText);
    }
  }, 500);

  const settings = {
    arrows: true,
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerPadding: "-10px",
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await axios.get("http://localhost:3001/api/services");
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <main id="servicos" className="Services">
      <div className="Grey-box-sc">
        <p></p>
      </div>
      <div className="Services-card">
        <div className="services-top">
          <p id="Services-description">
            - Entenda o que fazemos e onde atuamos
          </p>
          <p id="Services-title">Nossos serviços</p>
        </div>
        <Slider {...settings} className="Slider">
          {services?.map(({ _id, Title, Description, image, Link }) =>
            centerTitle === Title ? (
              <ServicesCard
                _id={_id}
                Title={Title}
                isCenter={true}
                Description={Description}
                image={image[0]}
                Link={Link}
              />
            ) : (
              <ServicesCard
                _id={_id}
                Title={Title}
                isCenter={false}
                Description={Description}
                image={image[0]}
                Link={Link}
              />
            )
          )}
        </Slider>
      </div>
      <div className="blank-space"> </div>
    </main>
  );
}

export default Services;
