import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Table } from "antd";
import { getPeopleDetailsRequest } from "./actions/form";

export const Details = props => {
  const { People, loadData } = props;

  console.log("API data::", People);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const columns = [
    {
      title: <span className="table-title">Name</span>,
      dataIndex: "first_name",
      render: first_name => <p className="table-names">{first_name}</p>
    },
    {
      title: <span className="table-title">Email</span>,
      dataIndex: "email",
      key: "email",
      render: email => <p className="table-names">{email} </p>
    },
    {
      title: <span className="table-title">Address</span>,
      dataIndex: "address",
      key: "address",
      render: address => <p className="table-names">{address} </p>
    },
    {
      title: <span className="table-title"> Age </span>,
      dataIndex: "age",
      key: "age",
      render: age => <p className="table-names">{age} </p>
    },
    {
      title: <span className="table-title">Proficiency</span>,
      dataIndex: "proficiency",
      key: "proficiency",
      render: proficiency => <p className="table-names">{proficiency} </p>
    }
  ];

  return (
    <>
      <Col>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <div className="users-table">
            <Table
              columns={columns}
              size="medium"
              dataSource={People}
              bordered="true"
              pagination={{ pageSize: 5 }}
            />
          </div>
        </Row>
      </Col>
    </>
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
