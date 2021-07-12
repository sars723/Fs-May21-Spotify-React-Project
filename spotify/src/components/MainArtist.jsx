import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainArtist extends Component {
  render() {
    return (
      <main>
        <div className="container-fluid p-0">
          <header></header>
          <div
            className="
          w-100
          hero-content
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
          ></div>
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
                    <a className="nav-link active" href="#albums">
                      ALBUMS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#top-tracks">
                      TOP TRACKS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      ABOUT
                    </a>
                  </li>
                  {/* <Link className="nav-link" to="/artist">
                    Artist
                  </Link> */}
                  <Link className="nav-link" to="/album">
                    Album
                  </Link>
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

          <section className="container" id="albums">
            <h2>Albums</h2>
            <div
              className="
            albums-cards
            row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
            g-4
          "
            ></div>
          </section>
          <section className="container" id="top-tracks">
            <h2>Top Tracks</h2>
            <div
              className="
            top-tracks-cards
            row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
            g-4
          "
            ></div>
          </section>
          <section className="container" id="about">
            <h2>About</h2>
            <div
              className="
            about-hero
            d-flex
            flex-column
            align-items-start
            justify-content-end
            p-1 p-md-5
          "
            >
              <h5 id="about-listeners">listeners</h5>
              <p className="about-description">
                Bonobo's rise has been stealthy but unstoppable and Simon Green,
                the man behind it all, is now one of the biggest electronic
                artists of our time, with 6 albums and a revered live show that
                has seen him play to sold-out crowds across the globe, including
                multiple shows at Alexandra Palace, Glastonbury, Coachella and
                Red Rocks Amphitheatre. His last album “Migration” reached #5 in
                the UK album charts and was GRAMMY nominated along with his
                subsequent “Linked” single. In 2019 he released the track
                “Ibrik” via his ‘fabric presents’ compilation and followed up in
                2020 with a remix of Mercury Prize winner Michael Kiwanuka’s
                soulful “Final Days.” In 2020 Bonobo teamed up with producer
                Totally Enormous Extinct Dinosaurs to deliver “Heartbreak,” a
                track that builds on the foundations of electronic music,
                tracing a line from the dance floors of 1980’s NYC to today. The
                12” is the first to arrive via Bonobo’s new label OUTLIER and
                expands on the series of club shows and festival stage takeovers
                under that same banner. Launched at the iconic New York club
                Output, OUTLIER sees Bonobo playing and curating an array of
                nights and festivals on either side of the Atlantic which has so
                far included Field Day, Nuits Sonores, OFFSonar and more,
                cementing his reputation not just as a prolific producer and
                musician, but as a DJ and curator too.
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
