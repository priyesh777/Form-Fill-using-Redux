import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {postForm, getPeopleDetails} from './formAction'


export const Form = props => {
  
  const checkEmpty = (data) => {
    return data && data.length === 0
  }

  const { people, dispatch, individual_detail} = props;
  console.log(people, 'manche ayo');

  useEffect(() => {
    if(checkEmpty(people)){
      dispatch(getPeopleDetails())
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    let body= {
      FirstName : e.target.firstName.value,
      LastName : e.target.lastName.value,
      Email : e.target.email.value,
      Age : e.target.age.value,
      Address : e.target.address.value,
      Proficiency : e.target.proficiency.value,
    }

    dispatch(postForm(body))
    
    e.target.reset();
  }

    return(
    <>
    <form className="form">

      <div className="form-group">
        <div>
          <label className="label">First Name</label>
          <input className="input" name="firstName"  type="text" placeholder="First Name"/>
        </div>
      </div>
  
      <div className="form-group">
        <div>
          <label className="label">Last Name</label>
          <input className="input" name="lastName"  type="text" placeholder="Last Name"/>
        </div>
      </div>
  
      <div className="form-group">
        <div>
          <label className="label">Email</label>
          <input className="input" name="email"  type="email" placeholder="Email Address"/>
        </div>
      </div>
  
    
  
      <div className="form-group">
        <div>
          <label className="label">Age</label>
          <input className="input" name="age"  type="number" placeholder="Age"/>
        </div>
      </div>
  
      <div className="form-group">
        <div>
          <label className="label">Address</label>
          <input className="input" name="address"  type="text" placeholder="Address"/>
        </div>
      </div>

      <div className="form-group">
        <div>
          <label className="label">Proficiency</label>
          <input className="input" name="proficiency"  type="text" placeholder="Proficiency-details"/>
        </div>
      </div>
  
      <div className="form-group">
        <div>
          <button className="button is-link" onClick={(e) => handleSubmit}>Submit</button>
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
  }

  const mapStateToProps = state => {
    return {
        people : state.people,
        individual_detail : state.individual_detail
    }
  }
  
  export default connect(mapStateToProps)(Form)