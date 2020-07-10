import React, { useState, useEffect } from 'react';
import '.\\ServicesCard.css';
import axios from 'axios';
import Button from '..\\Button\\Button'


function ServicesCard() {
    const [services, setServices] = useState([]);

    const loadServices = async () => {
        const res = await axios.get('http://localhost:3001/api/services');
        setServices(res.data);
    };

    useEffect(() => {
        loadServices();
    }, []);

    return (
        /*
        CARD DAS LATERAIS
        <div>
            {services?.map(({ _id, Title, Description, image, Link }) => (
                <div key={_id} className="Card">
                    <div>
                        <div className="image-box">
                            <div className="blue"></div>
                            <img src={image[0]?.url} className="card-image" />
                            <h1 className="title"> {Title}</h1>
                        </div>
                    </div>
                    <div className="Description">
                        <p>{Description}</p>
                    </div>
                </div>
            ))}
        </div>
        */

        /* CARD DO MEIO */
        <div>
            {services?.map(({ _id, Title, Description, image, Link }) => (
                <div key={_id} >
                    <div className="Card-center">
                        <div>
                            <div className="image-box-center">
                                <div className="blue-center"></div>
                                <img src={image[0]?.url} className="card-image-center" />

                            </div>
                        </div>
                        <div className="title-box-center"> <h1> {Title}</h1> </div>
                        <div className="Description-center">
                            <p>{Description}</p>
                        </div>
                    </div>
                    <div className="Button-box-center">
                        <Button Title="Saiba mais" buttonColor="#FFDC00" buttonSize="180px" buttonTextColor="Black" />
                    </div>
                </div>
            ))}
        </div>

    );
}


export default ServicesCard;