import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage'; */
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NavbarAside from "./components/NavbarAside";
import MainHome from "./components/MainHome";
import MyFooter from "./components/MyFooter";
import MainAlbum from './components/MainAlbum';
import MainArtist from './components/MainArtist';
import {Container} from 'react-bootstrap'

function App() {
  return (
  <Router>
    <div className="d-flex justify-content-start">
    <NavbarAside />
      <Route path="/" exact render={(props) => <MainHome {...props} />} />
      <Route
        path="/artist/:artistId"
        exact
        render={(props) => <MainArtist {...props} />}
      />
      <Route path="/album/:albumId" exact render={(props) => <MainAlbum {...props} />} />
      </div>
      <Container fluid>
      <MyFooter />
      </Container>
   </Router>
  );
}

export default App;
