import Card from "react-bootstrap/Card";
import "./landing.css";

function Proyectos() {
  return (
    <div className="cont-cards-proyectos">
      <Card
        className="card-hover"
        // style={{
        //   width: "18rem",
        //   border: "2px solid white",
        //   padding: "20px",
        //   borderRadius: "20px",
        // }}
      >
        <Card.Img
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          variant="top"
          src="/images/4.jpg"
        />
        <Card.Body>
          <Card.Title>CAFETERIA</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <a
            href="https://melodic-pithivier-c599ed.netlify.app/"
            target="_blank"
          >
            Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
          </a>
        </Card.Body>
      </Card>
      <Card
        className="card-hover"
        // style={{
        //   width: "18rem",
        //   border: "2px solid white",
        //   padding: "20px",
        //   borderRadius: "20px",
        // }}
      >
        <Card.Img
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
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
            <a href="https://jade-toffee-b14faf.netlify.app/#" target="_blank">
              Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="card-hover"
        // style={{
        //   width: "18rem",
        //   border: "2px solid white",
        //   padding: "20px",
        //   borderRadius: "20px",
        // }}
      >
        <Card.Img
          // className="imagen-cards"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          variant="top"
          src="/images/hero.jpg"
        />
        <Card.Body>
          <Card.Title>Carrito de cursos en linea.</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary"> */}
          <a href="https://heroic-choux-3bdb87.netlify.app/" target="_blank">
            {" "}
            Ir al sitio{""} <i class="fas fa-solid fa-arrow-right"></i>
          </a>

          {/* </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Proyectos;
