import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({ id, medium_cover_image, title, year, rating, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt="CoverImg" className={styles.movie__img} />
      <div>
        <h1 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h1>
        <div className={styles.movie__year}>{year}</div>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>{genres && genres.map((value, index) => <li key={index}>{value}</li>)}</ul>
        <hr />
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
