import Robo from "../../../assets/img/robo-contact.png";
import "./_message-sent.scss";

export default function MessageSent() {
  return (
    <div className="sent-main">
      <div className="sent-container">
        <img src={Robo} alt="Robô da InovTech" />
        <div className="sent-text">
          <h2 className="sent-title">Mensagem Enviada!</h2>
          <p className="sent-description">
            Obrigado por entrar em contato conosco. <br />
            Responderemos o mais breve possível.
          </p>
        </div>
      </div>
    </div>
  );
}
