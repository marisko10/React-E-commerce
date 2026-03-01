import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import NexusCarbon from './Pages/NexusCarbon/NexusCarbon';
import NexusTitanium from './Pages/NexusTitanium/NexusTitanium';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';





function App() {
  return (
      <div className="App">
        <Header /> 
        <main className='maincontent'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nexus-carbon" element={<NexusCarbon />} />
          <Route path="/nexus-titanium" element={<NexusTitanium />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App;


