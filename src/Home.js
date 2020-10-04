import React from "react";
import { useHistory } from "react-router-dom";
import thumbnail from "./images/queue.jpg";
import { Card, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push("./register");
  };

  return (
    <Col>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "30rem",
            height: "658px",
            textAlign: "center",
            marginTop: "1%",
            marginBottom: "2%"
          }}
        >
          <Card.Img variant="top" src={thumbnail} style={{ height: "420px" }} />
          <Card.Body>
            <Card.Title>Welcome to Queue Management</Card.Title>
            <Card.Text>
              Greetings, you can fill up the form in order to book a coupon to
              pay your utilities, we will be sending you a text message as well
              as an email regarding your coupon, which you will have to confirm
              within the given time frame.
            </Card.Text>
            <Button variant="primary" onClick={handleButton}>
              Book a coupon
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
};
export default Home;
