import React from "react";
import { Card, Button } from "react-bootstrap";

export const About = () => {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>My personal info</Card.Title>
        <Card.Text>
          <p>
            I am a tech-enthusiast as well as a musician pursuing my career in
            programming as an initial step to reach my future goals. <br />{" "}
            Everyday I work towards my goal with the two best quotes,
            <br />{" "}
            <i>
              {" "}
              Nothing can destroy iron but the rust itself, ~ Ratan Tata{" "}
            </i>{" "}
            <br /> <i> You are your greatest investment, ~ Walt Disney</i>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default About;
