import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setFormData,
  getPeopleDetailsRequest,
  postPeopleDetailsRequest
} from "./actions/form";
import { Figure, Card, Form, Button } from "react-bootstrap";
import Image from "./assets/image/form-img.jpg";
import { useHistory } from "react-router-dom";

const FormComponent = props => {
  const history = useHistory();
  const {
    people,
    individual_detail,
    formData,
    setData,
    loadData,
    postData
  } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleChange = e => {
    setData({ key: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    postData(formData);
    history.push("/details");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm mt-5">
            <Figure>
              <Figure.Image alt="failed to load img" src={Image} />
            </Figure>
          </div>

          <div className="col-sm mt-5">
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Enter your Personal Information </Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      type="text"
                      placeholder="your first Name"
                      value={formData.firstName || " "}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      placeholder="your last Name"
                      value={formData.lastName || " "}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="text"
                      placeholder="enter your email"
                      value={formData.email || " "}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      placeholder="enter your age"
                      value={formData.age || " "}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      name="address"
                      type="text"
                      placeholder="your permanent location"
                      value={formData.address || " "}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Proficiency</Form.Label>
                    <Form.Control
                      name="proficiency"
                      type="text"
                      placeholder="Your proficiency"
                      value={formData.proficiency || " "}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={e => handleSubmit(e)}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
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
    loadData: payload => dispatch(getPeopleDetailsRequest(payload)),
    postData: payload => dispatch(postPeopleDetailsRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
