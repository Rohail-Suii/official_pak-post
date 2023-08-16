import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero_Section from './components/Hero_Section';
import Side_bar from './components/Side_bar';
import Track from './components/Track';
import ServicesLeft from './components/ServicesLeft';
import ServicesRight from './components/ServicesRight';
import ImpLinks from './components/ImpLinks'
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero_Section />
      {/* <Side_bar /> */}
      <Track/>
      <ServicesLeft/>
      <ServicesRight/>
      <ImpLinks/>
      <p></p>  
    </div>
  );
}

export default App;
