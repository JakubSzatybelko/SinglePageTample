import "bootswatch/dist/cyborg/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carusel/carusel";
import "./customstyle.css";
import MainPage from "./Pages/mainPage";
import { initializeApp } from "firebase/app";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyA8gLlYnFBTXxM27f09AO7LhajBKiiwI24",
  authDomain: "spa-demo-f4111.firebaseapp.com",
  projectId: "spa-demo-f4111",
  storageBucket: "spa-demo-f4111.appspot.com",
  messagingSenderId: "538438927458",
  appId: "1:538438927458:web:c82989fd3e083fc429bd3b",
};

const app = initializeApp(firebaseConfig);

const App = () => {
  AOS.init({ duration: 1000, once: true });
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar stick={false} />
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
