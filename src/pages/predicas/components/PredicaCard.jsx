const PredicaCard = ({ predica }) => {
  console.log(predica);
  const { titulo, autor, fecha, urlVideo } = predica;
  return (
    <div>
      <p>
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
