import "./_contact.scss";
import Robo from "../../assets/img/robo-contact.png";
import { useState } from "react";
import MessageSent from "./MessageSent/MessageSent";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    duvida: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.duvida) {
      setError("Por favor, preencha todos os campos.");
      setMessage("");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Por favor, insira um e-mail válido.");
      setMessage("");
      return;
    }

    console.log("Form data submitted: ", formData);
    setMessage("Formulário enviado com sucesso!");
    setError("");
    setSubmitted(true);

    setFormData({
      nome: "",
      email: "",
      duvida: "",
    });
  };

  if (submitted) {
    return <MessageSent />;
  }

  return (
    <div className="contact-main">
      <div className="contact-info">
        <h1 className="contact-title">Contato</h1>
      </div>
      <div className="contact-container">
        <div className="contact-image">
          <img src={Robo} alt="Robô da InovaTech" />
        </div>
        <div className="contact-form">
          <h2 className="contact-form-title">Fale Conosco</h2>
          <form
            className="fale-conosco"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Seu Nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              placeholder="Seu melhor e-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              name="duvida"
              value={formData.duvida}
              onChange={handleChange}
            ></textarea>
            <button className="contato" type="submit">
              Enviar
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}
