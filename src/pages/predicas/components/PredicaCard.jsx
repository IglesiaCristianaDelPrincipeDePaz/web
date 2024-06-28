import './predicaCard.css';

const PredicaCard = ({ predica }) => {
  const { titulo, autor, fecha, urlVideo } = predica;
  return (
    <div className="card">
      <p className="card-title">
        {titulo} | {autor}
      </p>
      <p>{fecha}</p>
      <a href={urlVideo} target="_blank" rel="noopener noreferrer">
        Ver en YouTube
      </a>
    </div>
  );
};

export default PredicaCard;
