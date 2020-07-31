import React, { useState, useEffect } from "react";
import ".\\Footer.css";
import axios from "axios";
import instagram_logo from ".\\img\\Instagram-logo.svg";
import facebook_logo from ".\\img\\Facebook-logo.svg";
import linkedin_logo from ".\\img\\Linkedin-logo.svg";
import phone_icon from ".\\img\\phone-icon.svg";
import email_icon from ".\\img\\email-icon.svg";
import heart_icon from ".\\img\\heart.svg";
import code_icon from ".\\img\\code.svg";
import citi_icon from ".\\img\\citi.svg";

function Footer() {
  const [Footer, setFooter] = useState([]);

  const loadFooter = async () => {
    const res = await axios.get("https://elementusjr.herokuapp.com/api/informacoes");
    setFooter(res.data);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <div>
      {Footer?.map(
        ({
          _id,
          linkFacebook,
          linkLinkedin,
          linkInstagram,
          endereco,
          telefone,
          linkNewsletter,
        }) => (
          <div className="container-footer" key={_id}>
            <div className="white">
              <div className="address">
                <p className="footer-titles">Endereço</p>
                <p>{endereco}</p>
              </div>
              <div className="up">
                <p className="footer-titles">Redes sociais</p>
                <div className="social-media">
                  <button
                    className="button-footer"
                    onClick={() => window.open(linkFacebook)}
                  >
                    <img src={facebook_logo} className="img-social-media" />
                  </button>
                  <button
                    className="button-footer"
                    onClick={() => window.open(linkInstagram)}
                  >
                    <img src={instagram_logo} className="img-social-media" />
                  </button>
                  <button
                    className="button-footer"
                    onClick={() => window.open(linkLinkedin)}
                  >
                    <img src={linkedin_logo} className="img-social-media" />
                  </button>
                </div>
              </div>
              <div>
                <div className="row-footer">
                  <img src={phone_icon} className="margin-icon" />
                  <div className="distance">
                    <p>{telefone}</p>
                  </div>
                </div>
                <div className="row-footer">
                  <img src={email_icon} className="margin-icon" />
                  <p>contatoElementusJr@gmail.com</p>
                </div>
              </div>
            </div>
            <footer className="footer">
              <p> © 2020 | Elementus Júnior Consultoria </p>
              <p className="footer-text">
                {" "}
                Made with
                <img src={code_icon} className="margin-icon" /> and
                <img src={heart_icon} className="margin-icon" /> by
                <img src={citi_icon} id="citi-icon" />{" "}
              </p>
            </footer>
          </div>
        )
      )}
    </div>
  );
}

export default Footer;
