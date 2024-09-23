import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";

import { NavLink } from "react-router-dom";

import $ from "jquery";
import {  Container } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";
import ContactoLanding from "./contacto";
import Proyectos from "./proyectos";
import ScrollButton from "./ScrollButton";

import "./landing.css";

// -------------------------------------------------------------

const Landing = () => {
  // var copy = document.querySelector(".cont-sec-tecnologias").cloneNode(true)
  // document.querySelector(".cont-tecnologias").appendChild(copy)



  // efecto menu.
  $(document).ready(function () {
    // efecto menu.
    $(".navBar a").each(function (index, elemento) {
      $(this).css({
        top: "-200px",
      });

      $(this).animate(
        {
          top: "0",
        },
        1200 + index * 500
      );
    });
    // efecto header
    if ($(window).width() > 800) {
      $(".cont-quien-soy1 .contenedor-info").css({
        opacity: 0,
        marginTop: 0,
      });
      $(".cont-quien-soy1 .contenedor-info").animate(
        {
          opacity: 1,
          marginTop: "-110px",
        },
        2000
      );
    }
  });

  // this.state = {
  //   step: 1,
  // };
  // segunda manera para imprimir un pdf
  const onButtonClick = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.PDF"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="contenedorPadre">
      {/* <div className="fixeddd"> */}
      <section className="seccion1">
        <div className="nav-bar-fijo" data-bs-theme="dark">
          <Container className="cont-secundario">
            <div className="logo">
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <h1 style={{ fontWeight: "bold" }}>ANDRES VALENCIA</h1>
              </NavLink>
            </div>

            <nav className="navBar">
              <div className="contenedor-hofepr">
                <Link className="navLinks">Inicio</Link>
                <Link
                  to="Tecnologias"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="navLinks"
                >
                  Tecnologias
                </Link>
                <Link
                  to="Proyectos"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="navLinks"
                >
                  Proyectos
                </Link>
                <Link
                  to="Contacto"
                  spy={true}
                  smooth={true}
                  duration={900}
                  className="navLinks"
                >
                  Contacto
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      </section>
      {/* </div> */}
      <div>
        <section className="seccion2" id="acerca-de">
          <div className="cont-quien-soy1">
            <div className="contenedor-info">
              <div className="contenedor-titulos-andres">
                <h1 style={{ fontSize: "80px" }}>
                  ANDRES RODRIGUEZ VALENCIA...
                </h1>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Lic. en Ingeniería en Sistemas, Desarrollador Front-end
                  apasionado por crear experiencias web atractivas y
                  funcionales, conocimientos sólidos en desarrollo web Front-end
                  y con nociones de Full-Stack. Siempre me encuentro aprendiendo
                  algo nuevo que me interese.{" "}
                </h2>
              </div>

              <div className="contendor-princ-cv">
                <div className="hoverBotones">
                  <button className="btn-cv" onClick={onButtonClick}>
                    {/* primera manera para descargar el pdf */}
                    {/* <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="/CV.pdf"
                      download
                    >
                      {" "}
                      Descargar CV
                    </a> */}
                    Descargar CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cont-quien-soy2">
            <img
              className="imagen-jose"
              // style={{ width: "55%", display: "flex", objectFit: "cover" }}
              src="/images/foto2.png"
            ></img>
          </div>
        </section>
        <section className="seccion3" id="Tecnologias">
          <div className="titulo-tecnologias">
            <h1>TECNOLOGIAS</h1>
          </div>
          <div className="cont-tecnologias">
            <div className="cont-sec-tecnologias">
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/html.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/css-logo2.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/js-logo.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-8Porciento"> */}
              <img
                className="imagen-tecnologias"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/react1.png"
              ></img>
              {/* </div> */}

              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias2"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/bootstrap.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/jquery.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias2"
                src="/images/Mongodb.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img 
              className="imagen-tecnologias2" 
              src="/images/node.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img className="imagen-tecnologias" src="/images/git.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                src="/images/visual.png"
              ></img>
              {/* </div> */}
            </div>
            <div className="cont-sec-tecnologias2">
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/html.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/css-logo2.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/js-logo.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-8Porciento"> */}
              <img
                className="imagen-tecnologias"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/react1.png"
              ></img>
              {/* </div> */}

              {/* <div className="cont-img-10Porciento"> */}
              <img
                // className="imagen-tecnologias2"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/bootstrap.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/jquery.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias2"
                src="/images/Mongodb.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img 
              // className="imagen-tecnologias2" 
              src="/images/node.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img className="imagen-tecnologias" src="/images/git.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                src="/images/visual.png"
              ></img>
              {/* </div> */}
            </div>
            <div className="cont-sec-tecnologias2">
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/html.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/css-logo2.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/js-logo.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-8Porciento"> */}
              <img
                className="imagen-tecnologias"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/react1.png"
              ></img>
              {/* </div> */}

              {/* <div className="cont-img-10Porciento"> */}
              <img
                // className="imagen-tecnologias2"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/bootstrap.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                // style={{ width: "100%", display: "flex", objectFit: "cover" }}
                src="/images/jquery.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias2"
                src="/images/Mongodb.png"
              ></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img 
              // className="imagen-tecnologias2" 
              src="/images/node.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img className="imagen-tecnologias" src="/images/git.png"></img>
              {/* </div> */}
              {/* <div className="cont-img-10Porciento"> */}
              <img
                className="imagen-tecnologias1"
                src="/images/visual.png"
              ></img>
              {/* </div> */}
            </div>
            
            
            {/* <div className="cont-sec-tecnologias">
              <div style={{ width: "12%" }}>
                <img
                  style={{ width: "100%", display: "flex", objectFit: "cover" }}
                  src="/images/Mongodb.png"
                ></img>
              </div>
              <div style={{ width: "10%" }}>
                <img
                  style={{ width: "100%", display: "flex", objectFit: "cover" }}
                  src="/images/node.png"
                ></img>
              </div>
              <div style={{ width: "8%" }}>
                <img
                  style={{ width: "100%", display: "flex", objectFit: "cover" }}
                  src="/images/git.png"
                ></img>
              </div>
              <div style={{ width: "10%" }}>
                <img
                  style={{ width: "100%", display: "flex", objectFit: "cover" }}
                  src="/images/visual.png"
                ></img>
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </section>
        <section className="seccion4" id="Proyectos">
          <div className="titulo-tecnologias">
            <h1>PROYECTOS</h1>
          </div>
          <Proyectos />
        </section>
        <section id="Contacto" className="seccion5">
          <div className="cont-Contacto">
            <div className="titulo-tecnologias">
              <h1>CONTACTO</h1>
            </div>
            <ContactoLanding />
          </div>
        </section>
        <div>
          {" "}
          <ScrollButton />{" "}
        </div>
        <section className="seccion6">
          <footer className="footer">
            <span>Copyright Portafolio Andres @ 2024</span>
          </footer>
        </section>
      </div>
     
    </div>
    
  );
};

export default Landing;
