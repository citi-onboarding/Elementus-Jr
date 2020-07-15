import React, { useState, useEffect } from 'react';
import '.\\ServicesCard.css';
import axios from 'axios';
import Button from '..\\Button\\Button'


function ServicesCard({ isCenter, _id, Title, Description, image, Link }) {

    const [centerMode, setCenterMode] = useState([]);

    useEffect(() => {
        setCenterMode(isCenter);
    }, [isCenter]);



    if (centerMode) {
        return (
            /* CARD DO MEIO */
            <div>
                <div key={_id} >
                    <div className="Card-center">
                        <div>
                            <div className="image-box-center">
                                <div className="blue-center"></div>
                                <img src={image?.url} className="card-image-center" />

                            </div>
                        </div>
                        <div className="title-box-center"> <h1> {Title}</h1> </div>
                        <div className="Description-center">
                            <p>{Description}</p>
                        </div>
                    </div>
                    <div className="Button-box-center">
                        <Button Title="Saiba mais" buttonColor="#FFDC00" buttonSize="120px" buttonTextColor="Black" />
                    </div>
                </div>
                )
            </div>
        )
    }
    else {
        return (
            /* CARD DAS LATERAIS */
            <section>
                <div className="container-services-card">
                    <div key={_id} className="Card">
                        <div>
                            <div className="image-box">
                                <div className="blue"></div>
                                <img src={image?.url} className="card-image" />
                                <h1 className="title"> {Title}</h1>
                            </div>
                        </div>
                        <div className="Description">
                            <p>{Description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default ServicesCard;

