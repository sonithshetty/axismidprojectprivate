import React, { useState } from "react";
import classes from "./TeacherHome.module.css";
import {
  Button,
  Card,
  CardContent,
  Form,
  Grid,
  GridColumn,
  Icon,
  Image,
  Message,
  Modal,
} from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const TeacherHome = () => {
  let navigate = useNavigate();
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  const loginData = localStorage.getItem("TeacherData");
  const loginData2 = JSON.parse(loginData);

  function ShowStatus(props) {
    if (!props.value) {
      return <p className={classes.failstatus}>Not Recieved</p>;
    } else {
      return <p className={classes.successStatus}> Recieved</p>;
    }
  }

  const { id } = useParams();

  const [teacher, setTeacher] = useState(
    {
      id: 0,
      school_id: 1,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      salaryEarned: 0,
      salaryPaid: false,
      remainingSalary: 0,
      totalSalary: 30000,
      imageUrl: "",
    },
    []
  );

  const { school_id, firstName, lastName, emailId, password, salaryEarned } =
    teacher;

  const sendDataToAPI = (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = teacher;
    axios
      .put(`http://localhost:8082/teachers/${id}`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Your details are updated successfully");
        window.location.reload();
      });
    navigate(() => dispatch({ type: "close" }));
  };

  return (
    <div>
      <Grid centered columns={6}>
        <GridColumn className={classes.column}>
          <Card>
            <Image src={loginData2.imageUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>User Details:</Card.Header>
              <Card.Description>
                <b>FirstName:</b> {loginData2.firstName}
              </Card.Description>
              <Card.Description>
                <b>LastName:</b> {loginData2.lastName}
              </Card.Description>
              <Card.Description>
                <b>Email Id:</b> {loginData2.emailId}
              </Card.Description>
              <Card.Description>
                <b>Salary Status</b>
                <Icon name="rupee sign" />
                <ShowStatus value={loginData2.salaryPaid} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="id badge" />
                Id No : {loginData2.id}
              </a>
            </Card.Content>
            <CardContent textAlign="center">
              <Button
                onClick={() => dispatch({ type: "open", size: "small" })}
                color="green"
              >
                Update
              </Button>
              <Button color="red" onClick={() => navigate("/")}>
                Logout
              </Button>
            </CardContent>
          </Card>
        </GridColumn>
      </Grid>
      <Modal
        size={"tiny"}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>Update Your Details</Modal.Header>
        <Modal.Content>
          <p>Fill the form to update your login credentials</p>

          <Form>
            <Form.Field>
              <label>FirstName</label>
              <input
                type="text"
                value={loginData2.firstName}
                onChange={(e) => {
                  setTeacher({ ...teacher, firstName: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>LastName</label>
              <input
                type="text"
                // value={loginData2.lastName}
                // onChange={(e) => {
                //   setTeacher({ ...teacher, lastName: e.target.value });
                // }}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                // value={loginData2.emailId}
                // onChange={(e) => {
                //   setTeacher({ ...teacher, emailId: e.target.value });
                // }}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                // value={password}
                // onChange={(e) => {
                //   setTeacher({ ...teacher, password: e.target.value });
                // }}
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your new password again"
                // value={password}
                // onChange={(e) => {
                //   setTeacher({ ...teacher, password: e.target.value });
                // }}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close" })}>
            Back
          </Button>
          <Button positive onClick={(e) => sendDataToAPI(e)}>
            Update
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default TeacherHome;
