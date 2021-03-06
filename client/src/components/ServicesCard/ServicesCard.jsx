import React, { useState, useEffect } from "react";
import ".\\ServicesCard.css";
import axios from "axios";
import Button from "..\\Button\\Button";

function ServicesCard({ isCenter, _id, Title, Description, image, Link }) {
  const [centerMode, setCenterMode] = useState(false);

  useEffect(() => {
    setCenterMode(isCenter);
  }, [isCenter]);

  if (centerMode) {
    return (
      /* CARD DO MEIO */
      <section className="Services-card">
        <div className="container-services-card">
          <div key={_id}>
            <div className="Card-shape-center">
              <div>
                <div className="image-box-center">
                  <div className="blue-center"></div>
                  <img src={image?.url} className="card-image-center" />
                </div>
              </div>
              <div className="title-box-center">
                {" "}
                <p>{Title}</p>{" "}
              </div>
              <div className="Description-center">
                <p>{Description}</p>
              </div>
            </div>
            <div className="Button-box-center">
              <Button
                onClick={() => window.open(Link)}
                Title="Saiba mais"
                buttonColor="#FFDC00"
                buttonSize="120px"
                buttonTextColor="Black"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      /* CARD DAS LATERAIS */
      // sc = services card
      <section>
        <div className="container-services-card">
          <div key={_id} className="Card-shape-sc">
            <div>
              <div className="image-box-sc">
                <div className="blue-sc"></div>
                <img src={image?.url} className="card-image-sc" />
                <p className="title-sc">{Title}</p>
              </div>
            </div>
            <div className="Description-sc">
              <p>{Description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ServicesCard;
