import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Predicas from './pages/predicas';
import Header from './components/Header';
import './style.css';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/predicas" element={<Predicas />} />
      </Routes>
    </>
  );
};

export default App;
