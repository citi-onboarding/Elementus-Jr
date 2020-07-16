import React, { useState, useEffect } from 'react';
import '.\\Footer.css';
import axios from 'axios';
import instagram_logo from ".\\img\\Instagram-logo.png"
import facebook_logo from ".\\img\\Facebook-logo.png"
import linkedin_logo from ".\\img\\Linkedin-logo.png"
import phone_icon from ".\\img\\phone-icon.png"
import email_icon from ".\\img\\email-icon.png"

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
            <div className="adress">
              <h3>Endereço</h3>
              <p>{endereco}</p>
            </div>
            <div className="up">
              <h3>Redes sociais</h3>
              <div className="social-media">
              <img src={facebook_logo} className="img-social-media" />
              <img src={instagram_logo} className="img-social-media" />
              <img src={linkedin_logo} className="img-social-media" />
              </div>
            </div>
            <div>
              <div className="row">
                <img src={phone_icon} className="img-social-media" />
                <div className="distance"><p>{telefone}</p></div>
              </div>
              <div className="row">
               <img src={email_icon} className="img-social-media" />
                <p>{linkNewsletter}</p>
              </div>  
            </div>
          </div>
          <footer className="footer">
            <p> © 2020 | Elementus Júnior Consultoria </p>
            <h3 className="footer-text"> Made with {"</>"} and {"<"}3 CITi </h3>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default Footer;