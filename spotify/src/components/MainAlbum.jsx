import React, { Component } from "react";

export default class MainAlbum extends Component {
  render() {
    return (
      <main>
        <div className="container">
          {/* <button id="getsongsBtn" onclick="getSongs()">
            get songs
          </button> */}
          <div id="content" className="row">
            <ul id="songs"></ul>
          </div>
          <div className="row text-white">
            <div className="col-md-12 col-lg-4 album-cover">
              <img
                src="/assets/album/images/queen.jfif"
                className="img-fluid w-100"
                alt=""
              />
              <h3 className="mt-2">
                Queen II (Deluxe Edition
                <br />
                2011 Remaster)
              </h3>
              <p className="">Queen</p>
              <button
                type="button"
                className="btn rounded-pill my-3 px-5 text-light"
                id="btn-play"
              >
                PLAY
              </button>
              <p>1974 . 16 SONGS</p>

              <i className="far fa-heart"></i>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row track-lists">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Procession - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>1:13</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Father To Son- Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>6:13</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>White Queen (As it Began) - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>6:13</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Some Day One Day - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>6:13</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>The Loser in The End - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Ogre Battle - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>The Fairy Feller's Master-Stroke - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Nevermore - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>The March Of The Black Queen - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Seven Seas Of Rhye - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>
                      White Queen (As it Began)-Live At Hammersmith Odeon,
                      London/ December 1975
                    </h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>5:32</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Ogre Battle - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>The Fairy Feller's Master-Stroke - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Nevermore - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>The March Of The Black Queen - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>Seven Seas Of Rhye - Remasterd 2011</h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>4:01</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-music-note"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
                    <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
                  </svg>
                </div>
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column">
                    <h6>
                      White Queen (As it Began)-Live At Hammersmith Odeon,
                      London/ December 1975
                    </h6>
                    <p>queen</p>
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <p>5:32</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
