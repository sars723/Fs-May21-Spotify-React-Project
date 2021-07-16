import React, { Component } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";
import { Button } from "react-bootstrap";

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
          <div className="row hero-content text-white">
            {this.state.album && (
              <div className="col-12 col-md-10 col-lg-10 mt-5 text-center">
                <h2 className="titleMain ">{this.state.album.name}</h2>
                <div id="followers">{this.state.album.nb_fan}</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <Button
                    variant="success"
                    className=" rounded-pill mr-2  hero-play-btn"
                    id="playButton"
                  >
                    PLAY
                  </Button>
                  <Button
                    variant="success"
                    className=" rounded-pill hero-follow-btn "
                    id="followButton"
                  >
                    FOLLOW
                  </Button>
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
                ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
