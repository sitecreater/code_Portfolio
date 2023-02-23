import "./App.css";
import HeaderBar from "./components/HeaderBar";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Fade from "react-reveal/Fade";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Fade top>
        <MainPage />
      </Fade>
      <Fade right>
        <Profile />
        <Work />
        <Contact />
      </Fade>
      <FooterBar />
    </div>
  );
}

export default App;
