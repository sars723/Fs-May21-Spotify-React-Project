import React, { Component } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";

export default class MainArtist extends Component {
  state = {
    album: [],
    tracks: [],
    isAlbumLoading: true,
    isAlbumError: false,
    isTracksLoading: true,
    isTracksError: false,
  };
  fetchAlbums = async () => {
    console.log(this.props.match.params.artistId);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          this.props.match.params.artistId
      );
      if (response.ok) {
        const fetchedAlbums = await response.json();
        this.setState({ isAlbumLoading: false, album: fetchedAlbums });
        console.log(fetchedAlbums);
      } else {
        this.setState({ isAlbumLoading: false, isAlbumError: true });
      }
    } catch (error) {
      this.setState({ isAlbumLoading: false, isAlbumError: true });
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchAlbums();
  };
  fetchTracks = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${this.props.match.params.artistId}/top?limit=50`
      );
      if (response.ok) {
        const fetchedTracks = await response.json();
        this.setState({ isLoading: false, tracks: fetchedTracks.data });
        console.log(fetchedTracks.data);
      } else {
        this.setState({ isTracksLoading: false, isTracksError: true });
      }
    } catch (error) {
      this.setState({ isTracksLoading: false, isTracksError: true });
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchAlbums();
    this.fetchTracks();
  };
  render() {
    return (
      <main>
        <div className="container-fluid p-0">
          <div className="row">
            {this.state.album && (
              <div className="col-12 col-md-10 col-lg-10 mt-5 text-center">
                <h2 className="titleMain ">{this.state.album.name}</h2>
                <div id="followers">{this.state.album.nb_fan}</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success mr-2 mainButton"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton"
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </div>
            )}
          </div>
          <section className="container" id="throwback">
            <h2>#THROWBACKTHURSDAY</h2>
            <div
              className="
                    throwback-cards
                    row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6
                    g-4
                  "
            >
              {this.state.tracks &&
                this.state.tracks.map((track) => (
                  /*  <Song
                    albumId={track.album.id}
                    artistId={track.artist.id}
                    img={track.album.cover_medium}
                    albumTitle={track.album.title}
                    artistName={track.artist.name}
                  /> */
                  <div className="col text-center text-white mb-3">
                    <img
                      className="img-fluid"
                      src={track.album.cover_medium}
                      alt="img placeholder"
                    />
                    <div className="p-1">
                      <p
                        className="main-home-artist-name"
                        onClick={() =>
                          this.props.history.push("/artist/" + track.artist.id)
                        }
                      >
                        {" "}
                        {track.title}
                      </p>
                      <p
                        className="main-home-album-title"
                        onClick={() =>
                          this.props.history.push("/album/" + track.album.id)
                        }
                      >
                        {track.album.title}
                      </p>
                    </div>
                  </div>
                  /*   <div className="pt-5 mb-5">
                <div className="row" id="apiLoaded">
                  <div className="col-sm-auto col-md-auto text-center mb-5">
                    <a href="/album_page.html">
                      <img
                        className="img-fluid"
                        src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg"
                        alt="1"
                      />
                    </a>
                    <p>
                      <a href="#"> Track: "Shape Of My Hear..." </a>
                      <br />
                      <a href="#"> Album: "Ten Summoner's T..." </a>
                    </p>
                  </div>
                </div>
              </div> */
                ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
