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
                menu de todos los platillos que venden.
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
          <div className="theback">
            <Card.Body>
              <Card.Title>Startup</Card.Title>
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
                menu de todos los platillos que venden.
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
                Esto es una pagina web de una cafeteria 100% Yucateca, es un
                menu de todos los platillos que venden.
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
