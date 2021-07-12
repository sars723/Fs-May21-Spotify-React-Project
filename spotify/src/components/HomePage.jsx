import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavbarAside from "./NavbarAside";
import MainHome from "./MainHome";
import MyFooter from "./MyFooter";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-start">
          <NavbarAside />
          <MainHome />
        </div>
        <Container fluid>
          <MyFooter />
        </Container>
      </>
    );
  }
}
