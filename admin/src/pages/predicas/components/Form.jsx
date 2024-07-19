import { useState } from 'react';

export default function Search() {
  const [predica, setPredica] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/predicas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(predica),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    setPredica({ ...predica, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Título</label>
      <input onChange={handleInput} name="titulo" id="titulo" type="text" />

      <label htmlFor="autor">Autor</label>
      <input onChange={handleInput} name="autor" id="autor" type="text" />

      <label htmlFor="fecha">Fecha</label>
      <input onChange={handleInput} name="fecha" id="fecha" type="date" />

      <label htmlFor="urlVideo">URL</label>
      <input onChange={handleInput} name="urlVideo" id="urlVideo" type="text" />

      <button>Enviar</button>
    </form>
  );
}
