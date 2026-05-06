import { useEffect } from "react";
import { useState } from "react";

const ListaFilm = [
  { id: 1, title: "Inception", genere: "Fantascienza" },
  { id: 2, title: "Il Padrino", genere: "Thriller" },
  { id: 3, title: "Titanic", genere: "Romantico" },
  { id: 4, title: "Batman", genere: "Azione" },
  { id: 5, title: "Interstellar", genere: "Fantascienza" },
  { id: 6, title: "Pulp Fiction", genere: "Thriller" },
];

function App() {
const [film] = useState(ListaFilm);
  const [selectedGenere, setSelectedGenere] = useState('');
  const [filteredFilm, setFilteredFilm] = useState(ListaFilm);

useEffect(() => {
  let filtroFilm;

  if (selectedGenere === '') {
    filtroFilm = film;
  } else {
    filtroFilm = film.filter(movie => movie.genere === selectedGenere);
  }

  setFilteredFilm(filtroFilm);

}, [selectedGenere, film]);
  

  return (
    <>
      <h2>Lista film</h2>
      <div>
        <p>Filtra per genere</p>
        <select
          value={selectedGenere}
          onChange={(e) => setSelectedGenere(e.target.value)}  //salva il valore/genere scelto, l'utente cambia il genere e viene salvato
        >
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>
      <ul>
        {filteredFilm.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.genere}
          </li>
        ))}
      </ul>
    </>
  );







}

export default App;