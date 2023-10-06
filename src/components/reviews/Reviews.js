import React from "react";
import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

function Reviews({getMovieData, movie, reviews, setReviews}) {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId; //es el id de imdb

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    console.log("click en addReview");
    const rev = revText.current;
    
    try {
        const response = await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId});
        const updateReviews =reviews != null
          ? [...reviews, { body: rev.value }]
          : [{ body: rev.value }];
    
        rev.value = ""; //limpiar el input
        setReviews(updateReviews); //actualizo las reviews con la array que obtuve antes
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster} alt={movie?.title} />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    LabelText='Write a review'
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((rev) => {
            return (
              <>
                <Row>
                  <Col>{rev.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
