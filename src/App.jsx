import "bootswatch/dist/cyborg/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carusel/carusel";
import "./customstyle.css";
import MainPage from "./Pages/mainPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  AOS.init({ duration: 1000, once: true });
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar stick={false} />
          <Carousel />
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
