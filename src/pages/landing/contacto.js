import React, { useRef } from "react";
import { Input } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";

import emailjs from "@emailjs/browser";
import "./landing.css";

const ContactoLanding = () => {
  const form = useRef();

  const sendEmail = (event) => {
    // ---------------------------

    event.preventDefault();

    emailjs
      .sendForm(
        "service_8onqlxc",
        "template_nh6y92h",
        event.target,
        "m0Cc98G1Pe580D05x",
        form.current
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    form.current.reset();
    // console.log("sendEmail", event);
    toast.success("Correo enviado exitosamente");
  };

  return (
    <div className="cont-secundario-inputs">
      <div className="cont-borde-contacto">
        <div className="cont-info">
          <h3 style={{ textTransform: "uppercase" }}>
            Puede contactar en el formulario que se encuentra en esta sección o
            alternativamente puede hacerlo mediante:
          </h3>

          <span>
            <i className="fas fa-solid fa-phone"></i> Telefono: 9993-15-52-80
          </span>
          <span>
            <i className="fas fa-regular fa-envelope"></i> Mail:
            andresrova96@gmail.com
          </span>
          <span>
            <i className="fas fa-regular fa-envelope"></i> Mail:
            andres_rodriguez95@hotmail.com
          </span>
        </div>

        <form className="cont-inputs-contacto" ref={form} onSubmit={sendEmail}>
          <div className="opcaida-input-correo">
            <Input
              type="text"
              placeholder="Nombre"
              name="user_name"
              className="input-contacto-landing"
            ></Input>
          </div>
          <div className="opcaida-input-correo">
            <Input
              type="email"
              placeholder="Escribe tu correo"
              name="user_email"
              className="input-contacto-landing"
            ></Input>
          </div>
          <div className="opacida-mensaje-correo">
            <textarea
              placeholder="MENSAJE"
              name="user_message"
              className="input-mensaje-landing02"
            ></textarea>
          </div>
          {/* <div
            style={{ width: "100%", height: "40px" }}
            id="cargando"
            class="hidden"
          >
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
          </div> */}
          <div
            style={{
              width: "100%",
              height: "60px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              color: "#fff",
              // background: "yellow",
            }}
          >
            <div className="hoverBotones">
              <button
                type="submit"
                id="enviarFormulario"
                className="botonSignUp"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoLanding;
