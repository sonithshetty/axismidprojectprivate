import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Header, Image, Icon } from "semantic-ui-react";
import classes from "./ReadTeacher.module.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReadTeacher = () => {
  let navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [teacher, setTeacher] = useState({});
  const [update, setUpdate] = useState(
    {
      school_id: 1,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      salaryEarned: 30000,
    },
    []
  );

  const { school_id, firstName, lastName, emailId, password, salaryEarned } =
    update;

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  // const payTeacherSalary = (e) => {
  //   e.preventDefault();
  //   console.log("check");
  //   let requestBody = update;
  //   axios
  //     .put(`http://localhost:8082/teachers/${id}`, requestBody)
  //     .then((response) => {
  //       console.log(response.data);
  //       setUpdate(response.data);
  //       alert("Salary paid successfully");
  //     });
  //   navigate("/show-teacher");
  //   // window.location.reload();
  // };

  function ShowStatus(props) {
    if (!props.value) {
      return <p className={classes.failStatus}>Not Paid</p>;
    } else {
      return <p className={classes.successStatus}>Paid</p>;
    }
  }

  const salaryBody = {
    id: teacher.id,
    school_id: 0,
    firstName: teacher.firstName,
    lastName: teacher.lastName,
    emailId: teacher.emailId,
    password: teacher.password,
    salaryEarned: 30000.0,
    salaryPaid: true,
    remainingFees: teacher.remainingFees,
    totalSalary: teacher.totalSalary,
    imageUrl: teacher.imageUrl,
  };

  const paySalary = () => {
    axios
      .put(`http://localhost:8082/teachers/${teacher.id}`, salaryBody)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data);
        // localStorage.setItem("TeacherData", JSON.stringify(feesBody));
        window.location.reload();
        // localStorage.setItem("StudentData", JSON.stringify(response.data));
      });
  };

  function DisplayButton({ salaryPaid }) {
    let btn = null;
    if (salaryPaid == "FALSE") {
      btn = (
        <Button color="teal" className={classes.paysalary} onClick={paySalary}>
          Pay Salary
        </Button>
      );
    }
    return <div>{btn}</div>;
  }

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/teachers");
    setApiData(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8082/teachers/${id}`);
    loadUsers();
  };

  const getTeacherById = (id) => {
    axios.get(`http://localhost:8082/teachers/${id}`).then((response) => {
      setTeacher(response.data);
    });
  };

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.navbar}>
        <Link to={"/admin-home"}>
          <Button color="black">Back</Button>
        </Link>
      </div>
      <div className={classes.content}>
        <Table striped celled textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>FirstName</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Salary Paid</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data, index) => {
              return (
                <Table.Row>
                  <Table.Cell key={index}>{index + 1}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>{data.emailId}</Table.Cell>
                  <Table.Cell
                    className={classes.status}
                    style={{
                      backgroundColor: data.salaryPaid
                        ? "lightgreen"
                        : "tomato",
                    }}
                  >
                    <strong>{String(data.salaryPaid)}</strong>
                  </Table.Cell>
                  <Table.Cell className={classes.status}>
                    <div className={classes.space}></div>
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
                            getTeacherById(data.id);
                          }}
                        >
                          <Icon name="eye" />
                          View
                        </Button>
                      }
                    >
                      <Modal.Header>Teacher Information</Modal.Header>
                      <Modal.Content image>
                        <Image size="small" src={teacher.imageUrl} wrapped />
                        <Modal.Description>
                          <Header>Details of Teacher Id </Header>
                          <ul>
                            <li>
                              <b>Firstname : </b>
                              {teacher.firstName}
                            </li>
                            <li>
                              <b>Lastname : </b>
                              {teacher.lastName}
                            </li>
                            <li>
                              <b>Email : </b>
                              {teacher.emailId}
                            </li>
                            <li>
                              <b>Salary Paid : </b>
                              {/* {String(teacher.salaryPaid)} */}
                              <ShowStatus value={teacher.salaryPaid} />
                            </li>
                          </ul>
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <DisplayButton
                          salaryPaid={String(teacher.salaryPaid).toUpperCase()}
                        />
                        <div className={classes.space}></div>
                        <Button color="black" onClick={() => setOpen(false)}>
                          Back
                        </Button>
                      </Modal.Actions>
                    </Modal>
                    <Link to={`/update-teacher/${data.id}`}>
                      <Button color="green">
                        {" "}
                        <Icon name="user" />
                        Update
                      </Button>
                    </Link>
                    <Button color="red" onClick={() => deleteUser(data.id)}>
                      <Icon name="delete" />
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
  );
};

export default ReadTeacher;
