import React from "react";
import NavApp from "../nav-app/NavApp";
import Footer from "../footer/Footer";
import BackToTop from "../Back-to-top/BackTop";
import "./Events.css";
import { Container, Row, Col } from "react-bootstrap";
import PageviewIcon from "@material-ui/icons/Pageview";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "./Card";
const Evenements = (props) => {
  return (
    <div style={{ backgroundColor: "rgb(241, 240, 240)", marginTop: -19 }}>
      <NavApp navEvent={props.location.pathname} />

      <Container fluid={true} className="containerSerch">
        <input type="text" id="search-input" placeholder="Search..." />

        <PageviewIcon
          className="search-icon"
          onClick={() => console.log("object")}
        />
      </Container>
      <Container className="myCont" fluid={true}>
        <Row>
          <Col xs={2}>
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical contained primary button group"
              variant="contained"
              className="containerBts"
              style={{marginTop:"20px"}}
            >
              <Button>Sportif</Button>
              <Button>Educatif</Button>
              <Button>scientifique</Button>
              <Button>Musicale</Button>
              <Button>festivate</Button>
              <Button>Artisanat</Button>
             
            </ButtonGroup>
          </Col>
          <Col className="Cardscss">
            <Row >
              <Card />
            
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Evenements;
