import React, { Component } from "react";
import "./css/HomeStyles.css";
import { Link } from "react-router-dom";

export default class MainHome extends Component {
  render() {
    return (
      <main>
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-md">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="
                        navbar-nav
                        mx-auto
                        mb-2 mb-lg-0
                        justify-content-lg-center
                      "
                >
                  <li className="nav-item">
                    <a className="nav-link active" href="#throwback">
                      THROWBACK
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#shows">
                      SHOWS
                    </a>
                  </li>
                  <Link className="nav-link" to="/artist">
                    Artist
                  </Link>
                  <Link className="nav-link" to="/album">
                    Album
                  </Link>
                  <li className="nav-item">
                    <a className="nav-link" href="#search">
                      SEARCH
                    </a>
                  </li>
                  <li className="nav-item nav-show">
                    <a className="nav-link" href="#">
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
                    </a>
                  </li>
                  <li className="nav-item nav-show">
                    <a className="nav-link" href="/artist/index.html">
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
                  <li className="nav-item nav-show">
                    <a
                      href="./login/index.html"
                      type="button"
                      className="btn rounded-pill nav-link"
                    >
                      LOG OUT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="container" id="throwback">
            <h2>#THROWBACKTHURSDAY</h2>
            <div
              className="
                    throwback-cards
                    row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
                    g-4
                  "
            ></div>
          </section>
          <section className="container" id="shows">
            <h2>Shows to try</h2>
            <div
              className="
                    shows-cards
                    row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
                    g-4
                  "
            ></div>
          </section>
          <section className="container" id="search">
            <h2>Search Tracks</h2>
            <div className="d-flex align-items-center mb-4">
              <form
                action=""
                className="d-flex align-items-center"
                id="search-form"
              >
                <input
                  type="text"
                  id="search-input"
                  placeholder="Track name, album, artist..."
                  required
                />
                <button type="submit" className="btn mx-3">
                  Search
                </button>
              </form>
              <div
                className="alert alert-danger m-0 d-flex align-items-center"
                id="no-results-alert"
                role="alert"
              >
                No results found
              </div>
            </div>
            <div
              className="
                    search-grid
                    row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
                    g-4
                  "
            ></div>
          </section>
        </div>
      </main>
    );
  }
}
