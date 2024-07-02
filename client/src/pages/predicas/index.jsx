import { useEffect, useState } from 'react';
import './style.css';
import PredicaCard from './components/PredicaCard';

const Predicas = () => {
  const [predicas, setPredicas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/predicas')
      .then((res) => res.json())
      .then((data) => setPredicas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="page-title">Prédicas</h1>
      <div className="predica-cards">
        {predicas.map((predica) => {
          return <PredicaCard key={predica.id} predica={predica} />;
        })}
      </div>
    </>
  );
};

export default Predicas;
