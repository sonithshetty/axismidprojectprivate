import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Image, Header } from "semantic-ui-react";
import classes from "./ReadStudent.module.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ReadStudent = () => {
  const [apiData, setApiData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [student, setStudent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/students");
    setApiData(result.data);
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8082/students/${id}`);
    loadUsers();
  };

  const getStudentById = (id) => {
    axios.get(`http://localhost:8082/students/${id}`).then((response) => {
      setStudent(response.data);
    });
  };

  // const feeStatus = () => {
  //   if (String(apiData.feesPaid) == "true") {
  //     // <button>Paid</button>;
  //     // window.location.reload();
  //     // console.log(String(apiData.feesPaid));
  //     ("TRUE");
  //   } else {
  //     // <button>Pending</button>;
  //     // // window.location.reload();
  //     // console.log(String(apiData.feesPaid));
  //     ("FALSE");
  //   }
  // };

  // const setData = (id, name, std, email) => {
  //   console.log(id);
  //   localStorage.setItem("ID", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("std", std);
  //   localStorage.setItem("email", email);
  // };

  // const getData = () => {
  //   axios.get(`http://localhost:8082/students`).then((getData) => {
  //     setApiData(getData.data);
  //   });
  // };

  // const onDelete = (id) => {
  //   axios.delete(`http://localhost:8082/students/${id}`).then(() => {
  //     getData();
  //   });
  // };

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <h3>Admin Name</h3>
        <Link to={"/admin-home"} className={classes.link}>
          Back
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.content}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Std</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {apiData.map((data, index) => {
                return (
                  <Table.Row>
                    <Table.Cell key={index}>{index + 1}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.std}</Table.Cell>
                    <Table.Cell>{data.emailId}</Table.Cell>
                    <Table.Cell
                      className={classes.status}
                      style={{
                        backgroundColor: data.feesPaid
                          ? "lightgreen"
                          : "tomato",
                      }}
                    >
                      <strong>{String(data.feesPaid)}</strong>
                    </Table.Cell>
                    <Table.Cell>
                      {/* <Link to={`/view-student/${data.id}`}>
                        <Button color="blue">View</Button>
                      </Link> */}
                      <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        dimmer={"blurring"}
                        size={"tiny"}
                        trigger={
                          <Button
                            color="blue"
                            onClick={() => {
                              getStudentById(data.id);
                            }}
                          >
                            View
                          </Button>
                        }
                      >
                        <Modal.Header>Student Information</Modal.Header>
                        <Modal.Content image>
                          <Image size="small" src={student.imageUrl} wrapped />
                          <Modal.Description>
                            <Header>Details of a Student id :</Header>
                            <ul>
                              <li>
                                <b>Name : </b>
                                {student.name}
                              </li>
                              <li>
                                <b>Email : </b>
                                {student.emailId}
                              </li>
                              <li>
                                <b>Std : </b>
                                {student.std}
                              </li>
                              <li>
                                <b>Fees Paid : </b>
                                {String(student.feesPaid)}
                              </li>
                            </ul>
                          </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color="black" onClick={() => setOpen(false)}>
                            Back
                          </Button>
                        </Modal.Actions>
                      </Modal>
                      <Link to={`/update-student/${data.id}`}>
                        <Button color="green">Update</Button>
                      </Link>
                      <Button color="red" onClick={() => deleteUser(data.id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReadStudent;
