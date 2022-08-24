import './App.css';
import HeaderBar from './Components/HeaderBar';
import Contact from './Routes/Contact';
import MainPage from './Routes/MainPage';
import Profile from './Routes/Profile';
import Work from './Routes/Work';

function App() {
    return (
      <div className="App">
        <HeaderBar />
        <MainPage />
        <Profile />
        <Work />
        <Contact />
      </div>
    );
}

export default App;
