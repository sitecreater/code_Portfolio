import "./App.css";
import HeaderBar from "./Components/HeaderBar";
import Contact from "./Routes/Contact";
import MainPage from "./Routes/MainPage";
import Profile from "./Routes/Profile";
import Work from "./Routes/Work";
import Fade from "react-reveal/Fade";
import FooterBar from "./Components/FooterBar";

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
