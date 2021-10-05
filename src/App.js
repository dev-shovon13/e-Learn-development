import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/404/NotFound';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Mentors from './components/Mentors/Mentors';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* setting up React Router  */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/mentors">
            <Mentors />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/benefits">
            <Benefits />
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
