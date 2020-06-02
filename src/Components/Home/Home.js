import React, { Component } from "react";
import { Jumbotron, Container, Button, Carousel } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <>
        {/* <div>
          <div className="container-fluid">
            <Carousel>
              <Carousel.Item style={{ height: "300px" }}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src={"assets/img/img2.jpg"}
                />
                <Carousel.Caption>
                  <h3>First Demo </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "300px" }}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src={"assets/img/img1.jpg"}
                />
                <Carousel.Caption>
                  <h3>Second Demo</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "300px" }}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100"
                  src={"assets/img/img3.jpg"}
                />
                <Carousel.Caption>
                  <h3>Third Demo</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div> */}
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to Bullhorn</h1>
            <p>
              The game that will terrify your friends. Better hope I don't
              figure out my tazer idea
            </p>
            <Button variant="primary">Learn How To Play</Button>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Home;
