import React, { Component } from "react";

export default class MainAlbum extends Component {
  state = {
    albums: [],
    tracks: [],
    isLoading: true,
    isError: false,
  };
  fetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          this.props.match.params.albumId
      );
      if (response.ok) {
        const fetchedAlbums = await response.json();
        this.setState({
          isLoading: false,
          albums: fetchedAlbums,
          tracks: fetchedAlbums.tracks.data,
        });
        console.log(this.state.tracks);
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchAlbums();
  };
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
            {this.state.albums && (
              <div className="col-md-12 col-lg-4 album-cover">
                <img
                  src={this.state.albums.cover_medium}
                  className="img-fluid w-100"
                  alt=""
                />
                <h3 className="mt-2">
                  {this.state.albums.title}
                  <br />
                  2011 Remaster)
                </h3>
                <p className="">{/*  {this.state.albums.artist.name} */}</p>
                <button
                  type="button"
                  className="btn rounded-pill my-3 px-5 text-light"
                  id="btn-play"
                >
                  PLAY
                </button>
                <p>1974 . {/* {this.state.albums.tracks.data.length} */}</p>

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
            )}
            <div className="col-md-12 col-lg-8">
              {this.state.tracks &&
                this.state.tracks.map((track) => (
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
                        <h6>{track.title}</h6>
                        <p>{track.artist.name}</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <p>1:13</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
