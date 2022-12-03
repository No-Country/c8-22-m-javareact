import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail, BiMap } from "react-icons/bi";
import { MdGTranslate } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./results.css";
import { Link } from "react-router-dom";

const Results = ({ capture, hotels }) => {
  let { country } = useParams();

  const pintaCards = () => {
    if (capture === undefined) {
      const hotelbyCountry = hotels.filter(
        (hotel) => hotel.address.countryName === country
      );

      return (
        <Container>
          <h2 className="mainTitleResult text-center ">
            Resultados para {country}
          </h2>

          <div className="text-center">
            <h2 className="subTitleResult">
              Estos son los resultados de tu búsqueda ¡Encontrá el que más te
              gusté!{" "}
            </h2>
            <>
              <Row xs={1} md={3} className="g-3 mt-2">
                {hotelbyCountry.map((item) => (
                  <Col key={item.id} className="my-4 mb-5">
                    <Link
                      to={`/reservation/${item.id}`}
                      className="text-decoration-none text-body"
                    >
                      <Card className="cardResult shadow-lg my-4 mx-2 h-100">
                        <Card.Img
                          variant="top"
                          className="img-fluid h-100 rounded"
                          src={item.urlFoto}
                        />
                        <Card.Body className="py-4 my-2 border-3 rounded">
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Title>
                                <span className="cardTitleResult">
                                  {item.name}
                                </span>
                              </Card.Title>
                              <span className="d-flex justify-content-start align-content-center">
                                <BiMap className="mapIcon" />
                                <Link className="mx-2 text-decoration-none">Ver Mapa</Link>
                              </span>
                            </Col>
                            <Col className="text-end">
                              <span className="cardIcons mx-2 my-4">
                                <BiCommentDetail />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <AiOutlineHeart />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <MdGTranslate />
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Text>descripcion : {item.name}</Card.Text>
                              {/* <Card.Text>Codigo Pais : {item.iataCode},{item.address.countryName}.</Card.Text>
                              <Card.Text>
                                Codigo Postal : {item.address.postalCode},
                                {item.address.cityName}.
                              </Card.Text>
                              <Card.Text>
                                distance : {item.distance.value}
                                {item.distance.unit}
                              </Card.Text> */}
                              <Card.Text className="cardTotal">
                                Total : $ {item.dailyPrice}
                              </Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <h2 className="mainTitleResult text-center ">
            Resultados para {country}
          </h2>

          <div className="text-center">
            <h2 className="subTitleResult">
              Estos son los resultados de tu búsqueda ¡Encontrá el que más te
              gusté!{" "}
            </h2>
            <>
              <Row xs={1} md={3} className="g-3 mt-2">
                {capture.map((item) => (
                  <Col key={item.id} className="my-4 mb-5">
                    <Link
                      to={`/reservation/${item.id}`}
                      className="text-decoration-none text-body"
                    >
                      <Card className="cardResult shadow-lg my-4 mx-2 h-100">
                        <Card.Img
                          variant="top"
                          className="img-fluid h-100 rounded"
                          src={item.urlFoto}
                        />
                        <Card.Body className="py-4 my-2 border-3 rounded">
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Title>
                                <span className="cardTitleResult">
                                  {item.name}
                                </span>
                              </Card.Title>
                              <span className="d-flex justify-content-start align-content-center">
                                <BiMap className="mapIcon" />
                                <Link className="mx-2 text-decoration-none">
                                  Ver Mapa
                                </Link>
                              </span>
                            </Col>
                            <Col className="text-end">
                              <span className="cardIcons mx-2 my-4">
                                <BiCommentDetail />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <AiOutlineHeart />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <MdGTranslate />
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Text>descripcion : {item.name}</Card.Text>
                              {/* <Card.Text>Codigo Pais : {item.iataCode},{item.address.countryName}.</Card.Text>
                              <Card.Text>
                                Codigo Postal : {item.address.postalCode},
                                {item.address.cityName}.
                              </Card.Text>
                              <Card.Text>
                                distance : {item.distance.value}
                                {item.distance.unit}
                              </Card.Text> */}
                              <Card.Text className="cardTotal">
                                Total : $ {item.dailyPrice}
                              </Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </>
          </div>
        </Container>
      );
    }
  };

  return <>{pintaCards()}</>;
};

export default Results;
