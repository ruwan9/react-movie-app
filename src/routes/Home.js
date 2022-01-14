import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies);

  return (
    <div className={styles.container}>
      <h1 className={styles.loader}>Movies</h1>
      <hr />
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
            // <div key={movie.id}>
            //   <img src={movie.medium_cover_image} alt="CoverImg" />
            //   <h1>{movie.title}</h1>
            //   <div>
            //     year: {movie.year}, rating: {movie.rating}
            //   </div>
            //   <p>{movie.summary}</p>
            //   <ul>{movie.genres && movie.genres.map((value, index) => <li key={index}>{value}</li>)}</ul>
            //   <hr />
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
