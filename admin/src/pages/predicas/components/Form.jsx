import { useState } from 'react';

export default function Search() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [fecha, setFecha] = useState('');
  const [urlVideo, setUrlVideo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/predicas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, autor, fecha, urlVideo }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{`${titulo} ${autor} ${fecha} ${urlVideo}`}</p>
      <label htmlFor="titulo">Título</label>
      <input
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        id="titulo"
        type="text"
      />

      <label htmlFor="autor">Autor</label>
      <input
        onChange={(e) => setAutor(e.target.value)}
        value={autor}
        id="autor"
        type="text"
      />

      <label htmlFor="fecha">Fecha</label>
      <input
        onChange={(e) => setFecha(e.target.value)}
        value={fecha}
        id="fecha"
        type="date"
      />

      <label htmlFor="urlVideo">URL</label>
      <input
        onChange={(e) => setUrlVideo(e.target.value)}
        value={urlVideo}
        id="urlVideo"
        type="text"
      />

      <button>Enviar</button>
    </form>
  );
}
