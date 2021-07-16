
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
import {useState} from 'react'

function App() {
  const [songImg,setSongImg]=useState('')
  const [songArtist,setSongArtist]=useState('')
  const [songTitle,setSongTitle]=useState('')
  const [query,setQuery]=useState('')
  return (
  <Router>
    <div className="d-flex justify-content-start">
      {console.log(songImg)}
    <NavbarAside  searchCallback={setQuery}/>
      {!query?<Route path="/" exact render={(props) => <MainHome query="shakira" {...props} getSongImg={(song)=>setSongImg(song)} getSongAtrist={(song)=>setSongArtist(song)} getSongTitle={(song)=>setSongTitle(song)} />} />:<Route path="/" exact render={(props) => <MainHome query={query} {...props} getSongImg={(song)=>setSongImg(song)} getSongAtrist={(song)=>setSongArtist(song)} getSongTitle={(song)=>setSongTitle(song)} />} />}
      <Route
        path="/artist/:artistId"
        exact
        render={(props) => <MainArtist {...props} />}
      />
      <Route path="/album/:albumId" exact render={(props) => <MainAlbum {...props} />} />
      </div>
      <Container fluid>
      <MyFooter songImg={songImg} songArtist={songArtist} songTitle={songTitle}/>
      </Container>
   </Router>
  );
}

export default App;
