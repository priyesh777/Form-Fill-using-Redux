import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Table } from "react-bootstrap";
import { getPeopleDetailsRequest } from "./actions/form";

export const Details = props => {
  const { People, loadData } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="container">
      <Card style={{ width: "68rem" }}>
        <Card.Body>
          <Card.Title> List of users </Card.Title>
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Age</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {People.map((each, index) => (
                <tr key={index}>
                  <td>
                    {each.first_name} {each.last_name}
                  </td>
                  <td>{each.email}</td>
                  <td>{each.address}</td>
                  <td>{each.age}</td>
                  <td>{each.proficiency}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    People: state.form.people
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: payload => dispatch(getPeopleDetailsRequest(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
