import React, { useState, useEffect } from 'react';
import '.\\ServicesCard.css';
import axios from 'axios';


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
    );
}


export default ServicesCard;