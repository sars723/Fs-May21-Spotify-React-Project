import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavbarAside from "./NavbarAside";
import MainAlbum from "./MainAlbum";
import MyFooter from "./MyFooter";

export default class AlbumPage extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-start">
          <NavbarAside />
          <MainAlbum />
        </div>
        <Container fluid>
          <MyFooter />
        </Container>
      </>
    );
  }
}
