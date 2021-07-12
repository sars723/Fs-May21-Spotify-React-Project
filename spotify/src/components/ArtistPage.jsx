import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavbarAside from "./NavbarAside";
import MainArtist from "./MainArtist";
import MyFooter from "./MyFooter";

export default class ArtistPage extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-start">
          <NavbarAside />
          <MainArtist />
        </div>
        <Container fluid>
          <MyFooter />
        </Container>
      </>
    );
  }
}
