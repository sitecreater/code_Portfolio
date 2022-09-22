import './App.css';
import HeaderBar from './Components/HeaderBar';
import Contact from './Routes/Contact';
import MainPage from './Routes/MainPage';
import Profile from './Routes/Profile';
import Work from './Routes/Work';
import LightSpeed from 'react-reveal/LightSpeed';

function App() {
    return (
        <div className="App">
            <HeaderBar/>
            <LightSpeed left="left">
                <MainPage/>
                <Profile/>
                <Work/>
                <Contact/>
            </LightSpeed>
        </div>
    );
}

export default App;
