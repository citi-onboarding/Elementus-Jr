import React, { useState, useEffect } from 'react';
import '.\\Footer.css';
import axios from 'axios';
import instagram_logo from ".\\img\\Instagram-logo.svg"
import facebook_logo from ".\\img\\Facebook-logo.svg"
import linkedin_logo from ".\\img\\Linkedin-logo.svg"
import phone_icon from ".\\img\\phone-icon.svg"
import email_icon from ".\\img\\email-icon.svg"
import heart_icon from ".\\img\\heart.svg"
import code_icon from ".\\img\\code.svg"
import citi_icon from ".\\img\\citi.svg"

function Footer() {
  const [Footer, setFooter] = useState([]);

  const loadFooter = async () => {
    const res = await axios.get('http://localhost:3001/api/informacoes');
    setFooter(res.data);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <div>
      {Footer?.map(({ _id, linkFacebook, linkLinkedin, linkInstagram, endereco, telefone, linkNewsletter }) => (
        <div className="container" key={_id}>
          <div className="white">
            <div className="address">
              <p className="footer-titles">Endereço</p>
              <p>{endereco}</p>
            </div>
            <div className="up">
              <p className="footer-titles">Redes sociais</p>
              <div className="social-media">
              <img src={facebook_logo} className="img-social-media" />
              <img src={instagram_logo} className="img-social-media" />
              <img src={linkedin_logo} className="img-social-media" />
              </div>
            </div>
            <div>
              <div className="row">
                <img src={phone_icon} className="margin-icon" />
                <div className="distance"><p>{telefone}</p></div>
              </div>
              <div className="row">
               <img src={email_icon} className="margin-icon" />
                <p>{linkNewsletter}</p>
              </div>  
            </div>
          </div>
          <footer className="footer">
            <p> © 2020 | Elementus Júnior Consultoria </p>
            <p className="footer-text"> Made with  
            <img src={code_icon} className="margin-icon" /> and
            <img src={heart_icon} className="margin-icon" /> by
            <img src={citi_icon} id="citi-icon" /> </p>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default Footer;