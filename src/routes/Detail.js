import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  // console.log(id);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  // console.log(detail);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.detail}>
      <div>
        <h1>Movie Detail</h1>
      </div>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <div>
          <img src={detail.medium_cover_image} alt="CoverImg" />
          <h1 className={styles.movie__title}>{detail.title_long}</h1>
          <hr />
          <div>
            year: {detail.year}, rating: {detail.rating}
          </div>
          <p>{detail.description_full}</p>
          <div></div>
          <ul className={styles.movie__genres}>{detail.genres && detail.genres.map((value, index) => <li key={index}>{value}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
