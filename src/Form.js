import React, { useState } from "react";
import { connect } from "react-redux";
import { setFormData, postPeopleDetailsRequest } from "./actions/form";
import { Figure, Card, Form, Row, Col } from "react-bootstrap";
import Image from "./images/form-img.jpg";
import BackArrow from "./images/arrow-left.svg";
import { useHistory, Link } from "react-router-dom";
import { Button } from "antd";
import { toast } from "react-toastify";

const FormComponent = props => {
  const history = useHistory();
  const { formData, setData, postData } = props;

  const [validate, setValidate] = useState(false);

  const handleChange = e => {
    setData({ key: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValidate(true);
    if (
      formData.first_name !== "" &&
      formData.last_name !== "" &&
      formData.email !== "" &&
      formData.age !== "" &&
      formData.address !== "" &&
      formData.phone !== ""
    ) {
      postData(formData);
      toast.success("Registered successfully");
      history.push("/");
    }
    console.log("form values::", formData);
  };

  return (
    <>
      <div className="container">
        <div className="support-button-section">
          <Button
            className="cps-form-backButton"
            onClick={() => {
              history.push("/");
            }}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
          <p>
            Need Help?{" "}
            <Link to="##" className="link-words">
              Contact Support
            </Link>
          </p>
        </div>

        <Row>
          <Col lg={6}>
            <Figure>
              <Figure.Image alt="failed to load img" src={Image} />
            </Figure>
          </Col>

          <Col lg={6}>
            <Card style={{ width: "25rem", marginBottom: "25px" }}>
              <Card.Body>
                <Card.Title>Enter your Personal Information </Card.Title>
                <Form noValidate validated={validate} onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="first_name"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter first name
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="last_name"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter last name
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your age
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your address
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      name="phone"
                      type="number"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter a valid phone number
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    className="submit-button"
                    type="submit"
                    onClick={e => handleSubmit(e)}
                    style={{ marginTop: "16px" }}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    people: state.form.people,
    individual_detail: state.form.individual_detail,
    formData: state.form.formData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: payload => dispatch(setFormData(payload)),
    postData: payload => dispatch(postPeopleDetailsRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
