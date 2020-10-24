import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import HeaderMain from './Components/Header/HeaderMain/HeaderMain';
import Navbar from './Components/Header/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
