import Card from "react-bootstrap/Card";
import "./landing.css";

function Proyectos() {
  return (
    <div className="cont-cards-proyectos">
      {/* <a
        style={{ textDecoration: "none", display: "flex", color: "white" }}
        href="https://melodic-pithivier-c599ed.netlify.app/"
        target="_blank"
      >
      
      </a> */}
      <Card className="card-hover">
        <div className="thecard">
          <div className="thefront">
            <Card.Img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
              variant="top"
              src="/images/4.jpg"
            />
          </div>
          <div className="texto-encima">CAFETERIA</div>

          <div className="theback">
            <Card.Body>
              <Card.Title>CAFETERIA</Card.Title>
              <Card.Text
                style={{
                  color: "white",
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Esto es una pagina web de una cafeteria 100% Yucateca, es un
                menu con todos los servicios que ofrecen y es adaptable a
                cualquier dispoispovo inteligente.
              </Card.Text>

              <a
                href="https://melodic-pithivier-c599ed.netlify.app/"
                target="_blank"
                style={{
                  color: "white",
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
              </a>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Card className="card-hover">
        <div className="thecard">
          <div className="thefront">
            <Card.Img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
              variant="top"
              src="/images/4.1.jpg"
            />
          </div>
          <div className="texto-encima">Startup</div>

          <div className="theback">
            <Card.Body>
              <Card.Title>Startup</Card.Title>
              <Card.Text
                style={{
                  color: "white",
                  paddingTop: "15px",
                  display: "flex",
                  padding: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Esto es un sitio web practico, sencillo y responsivo, que hice
                en un proyecto final.
              </Card.Text>

              <a
                href="https://jade-toffee-b14faf.netlify.app/#"
                target="_blank"
                style={{
                  color: "white",
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
              </a>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Card className="card-hover">
        <div className="thecard">
          <div className="thefront">
            <Card.Img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
              variant="top"
              src="/images/hero.jpg"
            />
          </div>
          <div className="texto-encima">Carrito de cursos en linea.</div>

          <div className="theback">
            <Card.Body>
              <Card.Title>Carrito de cursos en linea.</Card.Title>
              <Card.Text
                style={{
                  color: "white",
                  paddingTop: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                Esto es una pagina web de un carrito de cursos en linea que hice
                para un proyecto final.
              </Card.Text>

              <a
                href="https://heroic-choux-3bdb87.netlify.app/"
                target="_blank"
                style={{
                  color: "white",
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
              </a>
            </Card.Body>
          </div>
        </div>
      </Card>

      {/* <a
        style={{ textDecoration: "none", display: "flex", color: "white" }}
        href="https://jade-toffee-b14faf.netlify.app/#"
        target="_blank"
      >
        <Card className="card-hover">
          <Card.Img
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            variant="top"
            src="/images/4.1.jpg"
          />
          <Card.Body>
            <Card.Title>Startup</Card.Title>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <a
                href="https://jade-toffee-b14faf.netlify.app/#"
                target="_blank"
              >
                Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </Card.Body>
        </Card>
      </a> */}
    </div>
  );
}

export default Proyectos;
