import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Predicas from './pages/predicas';

const App = () => {
  return (
    <>
      <h1>Iglesia Cristiana del Príncipe de Paz</h1>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/predicas" element={<Predicas />} />
      </Routes>
    </>
  );
};

export default App;
