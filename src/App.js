
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Covid19 from './Components/Covid19/Covid19';
import Doctors from './Components/Doctors/Doctors';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Research from './Components/Research/Research';
import DetailsService from './Components/DetailsService/DetailsService';
import Services from './Components/Services/Services';
import Slider from './Components/Slider/Slider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Slider></Slider>
        <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/services">
        <Services></Services>
        </Route>
        <Route path="/doctors">
        <Doctors></Doctors>
        </Route>
        <Route path="/research">
        <Research></Research>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <Route path="/detailsservice/:serviceId">
          <DetailsService></DetailsService>
        </Route>
        <Route path="/covid19">
        <Covid19></Covid19>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
