import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { postForm, getPeopleDetails } from './formAction';
import { setFormData, getPeopleDetailsRequest } from './actions/form';
import { Button } from 'react-bootstrap';

export const Form = (props) => {
  const {
    people,
    dispatch,
    individual_detail,
    formData,
    setData,
    loadData,
  } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleChange = (e) => {
    setData({ key: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <form className="form">
        <div className="form-group">
          <div>
            <label className="label">First Name</label>
            <input
              className="input"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="label">Last Name</label>
            <input
              className="input"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="label">Email</label>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="label">Age</label>
            <input
              className="input"
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="label">Address</label>
            <input
              className="input"
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="label">Proficiency</label>
            <input
              className="input"
              name="proficiency"
              type="text"
              placeholder="Proficiency-details"
              value={formData.proficiency || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <Button className="Button is-link" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </div>
        </div>
      </form>

      <h2>LIST OF INDIVIDUALS</h2>
      {/* <table border='1px' style={{width: '50%', marginTop: 50}} cellPadding="10px">
          <thead>
            <tr>
              <th>Name of Person</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Proficiency</th>
              <th>Provience</th>
            </tr>
          </thead>
          <tbody>
            {
              people.map((each, id) => {
                // let { firstName, lastName, email, age, address, proficiency} = each
                return (
                  <tr key={id}>
                    <td>{each.firstName} {each.lastName}</td>
                    <td>{each.email}</td>
                    <td>{each.age}</td>
                    <td>{each.address}</td>
                    <td>{each.proficiency}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    people: state.form.people,
    individual_detail: state.form.individual_detail,
    formData: state.form.formData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (payload) => dispatch(setFormData(payload)),
    loadData: (payload) => dispatch(getPeopleDetailsRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
