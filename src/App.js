import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import ListData from './ListData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
// let history = useHistory();
// import { NavBar } from '../components'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MainPage /> */}
      <Router>
            {/* <NavBar /> */}
            <Switch>
                <Route path="/get_data" component={ListData} />
                <Route path="/" exact component={MainPage} />
                {/* <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                /> */}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
