import React, { useState, useEffect } from 'react';
import '.\\DepoimentsCard.css';
import axios from 'axios';
import Button from '..\\Button\\Button'
import instagram_logo from ".\\img\\Instagram-logo.svg"
import facebook_logo from ".\\img\\Facebook-logo.svg"
import linkedin_logo from ".\\img\\Linkedin-logo.svg"
import quote_img from ".\\img\\quote.svg"

function DepoimentsCard() {
    const [Depoiments, setDepoiments] = useState([]);

    const loadDepoiments = async () => {
        const res = await axios.get('http://localhost:3001/api/depoiments');
        setDepoiments(res.data);
    };

    useEffect(() => {
        loadDepoiments();
    }, []);



    return (
        <section >
            {Depoiments?.map(({ _id, ClientName, CompanyFunction, Depoiment, Facebook, Linkedin, Instagram, image }) => (
                <div key={_id} className="container-dc">
                    <div className="card-dc">
                        <div className="quote-box">
                            <img src= {quote_img} className="quote-img" />
                        </div>
                        <div className='yellow-box-dc-container'>
                            <div className="yellow-box-dc">
                                <button className="button-dc" onClick={() => window.open(Facebook)}><img src={facebook_logo} className="img-social-media-dc" /></button>
                                <button className="button-dc" onClick={() => window.open(Instagram)}><img src={instagram_logo} className="img-social-media-dc" /></button>
                                <button className="button-dc" onClick={() => window.open(Linkedin)}><img src={linkedin_logo} className="img-social-media-dc" /></button>
                            </div>
                        </div>

                        <div className="column">
                            <div className="image-box-dc">
                                <div className="blue-dc"></div>
                                <img src={image[0]?.url} className="depoiments-image" />
                            </div>
                            <p className="client-name-text">{ClientName}</p>
                            <p className="company-function-text">{CompanyFunction}</p>
                            <div className="yellow-line"></div>
                            <p className="depoiment-text">{Depoiment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default DepoimentsCard;

