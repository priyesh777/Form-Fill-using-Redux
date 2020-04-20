import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

export const Details = props => {
  const { formData } = props;

  return (
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
        {formData.map((each, index) => (
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
  );
};

const mapStateToProps = state => {
  return {
    formData: state.form.formData
  };
};
export default connect(mapStateToProps)(Details);
