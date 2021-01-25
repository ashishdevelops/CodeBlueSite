
import Background from './components/Background/Background'
import Logo from './components/Background/Logo'
import Navbar from './components/Navigation/Navbar'
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Background /> 
      <Logo />      
      <Navbar />
      <Home />
    </div>
  );
}

export default App;