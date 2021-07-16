import React, { Component } from "react";
import "./css/NavbarAsideStyles.css";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarAside extends Component {
  render() {
    return (
      <aside>
        <Nav className="side-navbar d-flex flex-column justify-content-between">
          <div class="d-flex flex-column">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              className="img-fluid nav-logo"
              alt=""
            />
            <ul>
              <li>
                <Link to="/" className="nav-link ">
                  <div className="aside-home">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>{" "}
                    Home
                  </div>
                </Link>
                {/* <a href="#" className="active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-house-door"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                  </svg>
                  Home
                </a> */}
              </li>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <li>
                <a href="/artist/index.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-music-note-list"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                    <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  Your Library
                </a>
              </li>
            </ul>
            <div className="d-flex flex-column ">
              <i className="far fa-arrow-alt-circle-down download-icon">
                <span>Install App</span>
              </i>

              <div>
                <hr className="side-hr" />
                <div>
                  <img
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg"
                    width="40px"
                    height="40px"
                    alt=""
                    className="profile-img"
                  />
                </div>
                <div className="profile-name">
                  <p>Diego Banovaz</p>
                </div>
              </div>

              <a
                href="./login/index.html"
                type="button"
                className="btn rounded-pill"
              >
                LOG OUT
              </a>

              <div className="d-flex  mt-2">
                <p>
                  Cookie
                  <br />
                  Policy
                </p>
                <div className="line-between"></div>
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </Nav>
      </aside>
    );
  }
}
