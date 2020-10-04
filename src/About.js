import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <Col>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "60rem",
            textAlign: "center",
            marginTop: "1%",
            marginBottom: "2%"
          }}
        >
          <Card.Body>
            <Card.Title>Main goal of this application</Card.Title>
            <Card.Text>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
};
export default About;
