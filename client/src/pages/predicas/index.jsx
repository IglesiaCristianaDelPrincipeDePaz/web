import { useEffect, useState } from 'react';
import './style.css';
import PredicaCard from './components/PredicaCard';

const Predicas = () => {
  const [predicas, setPredicas] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/predicas`)
      .then((res) => res.json())
      .then((data) => setPredicas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="page-title">Prédicas</h1>
      <div className="predica-cards">
        {predicas.map((predica) => {
          return <PredicaCard key={predica._id} predica={predica} />;
        })}
      </div>
    </>
  );
};

export default Predicas;
