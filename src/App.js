import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Playing from "./components/Playing";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";
import SearchMovieContainer from "./components/SearchMovieContainer";


function App() {
  return (
    <Router>
      <div className="App-header">
        <Jumbotron />
        <Navbar />
        <Route exact path="/searchReviews" component={SearchMovieContainer} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/playing" component={Playing} />
      </div>
    </Router>
  );
}

export default App;
