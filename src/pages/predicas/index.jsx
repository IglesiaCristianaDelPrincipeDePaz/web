import PredicaCard from './components/PredicaCard';

const predicas = [
  {
    id: 1,
    titulo: 'Atrévete a ser diferente',
    autor: 'Juan Serveleon',
    fecha: '2024-06-23',
    urlVideo: 'https://youtu.be/nowlHasXSC8?si=33Fl9zMLJycqjCfu',
  },
  {
    id: 2,
    titulo: 'Peleando por un sueño',
    autor: 'Juan Serveleon',
    fecha: '2024-06-16',
    urlVideo: 'https://youtu.be/pkrXjNFjL6E?si=Z16VcbfusizcwawS',
  },
];

const Predicas = () => {
  return (
    <>
      <h1>Prédicas</h1>
      {predicas.map((predica) => {
        return <PredicaCard key={predica.id} predica={predica} />;
      })}
    </>
  );
};

export default Predicas;
