import { Routes, Route } from 'react-router-dom';
import './App.css';
import Abook from './components/Abook';
import Footer from './components/Footer';
import Headers from './components/Header'
function App() {
  return (
    <div className="">
      <Headers />
      <Routes>
        <Route path={'/Abook'} element={<Abook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
