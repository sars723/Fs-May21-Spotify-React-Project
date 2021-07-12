import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route
        path="/artist"
        exact
        render={(props) => <ArtistPage {...props} />}
      />
      <Route path="/album" exact render={(props) => <AlbumPage {...props} />} />
    </Router>
  );
}

export default App;
