
import Background from './components/Background'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Background /> 
      <Logo />      
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;