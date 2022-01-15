import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "./Detail.module.css";
// import Button from "react-bootstrap/Button";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const back_img = detail.background_image;
  console.log(back_img);
  // console.log(id);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };

  // console.log(detail);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${back_img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <Container>
          <Row style={{ padding: "20px", display: "flex" }}>
            <Col xs={12} md={8}>
              <img src={detail.medium_cover_image} alt="CoverImg" />
            </Col>
            <Col xs={12} md={4} style={{ paddingLeft: "40px" }}>
              <h1 className={styles.movie__title}>{detail.title_long}</h1>
              <div>
                year: {detail.year}, rating: {detail.rating}, runtime: {detail.runtime}
              </div>
              <p>{detail.description_full}</p>
              <ul>{detail.genres && detail.genres.map((value, index) => <li key={index}>{value}</li>)}</ul>
            </Col>
          </Row>
          {/* <div style={{ padding: "20px", display: "flex" }}>
            <div style={{ paddingLeft: "40px" }}></div>
          </div> */}
        </Container>
      )}
    </div>
  );
}

export default Detail;
