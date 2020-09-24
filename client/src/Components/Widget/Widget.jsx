import React, {useState, useEffect} from "react";
import "./Widget.css";
import chatbox from "./conversation.svg";
import axios from "axios";
import enviar from "./send.svg";

function Widget(){
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [number, setNumber] = useState('');
	const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(message)}`;

	const loadNumber = async () => {
    const res = await axios.get("https://elementusjr.herokuapp.com/api/informacoes");
    setNumber(res?.data[0]?.contatoWhatsapp);
  };

  useEffect(() => {
    loadNumber();
  }, []);

	return (
		<div>
			{isOpen && (
				<>
					<div className="widget-background" onClick={() => setIsOpen(false)} />
					<div className="widget-chat">
						<p className="widget-text">Há algo em que podemos te ajudar? Entre em contato conosco via WhatsApp</p>
						<div className="widget-input-button">
							<input placeholder="Mensagem" className="widget-input" value={message} onChange={(e) => setMessage(e.target.value)} />
							<button onClick={()=> {
								setIsOpen(false);
								window.open(target)
							}} className="widget-submit-message">
								<img src={enviar} alt="botão para enviar mensagem" />
							</button>
						</div>
					</div>
				</>
			)}
			<button className="button-widget" onClick={() => setIsOpen(!isOpen)}>
				<img src={chatbox} alt=""/>
			</button>
		</div>
	);
};

export default Widget;