import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Card, Image } from "semantic-ui-react";
import classes from "./UpdateStudent.module.css";
import axios from "axios";

const UpdateStudent = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [std, setStd] = useState("");

  const [student, setStudent] = useState({
    id: 0,
    school_id: 1,
    name: "",
    emailId: "",
    password: "",
    std: "",
    feesPaid: false,
    feesTotal: 15000,
    fees: 0,
    remainingFees: 0,
  });

  // console.log(name);
  // console.log(email);
  // console.log(password);
  // console.log(std);

  const {
    school_id,
    name,
    emailId,
    password,
    std,
    feesPaid,
    feesTotal,
    fees,
    remainingFees,
  } = student;

  // const onInputChange = (e) => {
  //   setStudent({ ...student, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    loadUsers();
  }, []);

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = student;
    await axios
      .put(`http://localhost:8082/students/${id}`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Student updated successfully");
      });
    navigate("/show-student");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8082/students/${id}`);
    setStudent(result.data);
  };

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <Card>
          <Image size="tiny" src={student.imageUrl} wrapped ui={false} />

          <Card.Content>
            <Card.Header textAlign="center">Add Student Details</Card.Header>
            <Card.Meta>
              <span>Enter Your New Credentials</span>
            </Card.Meta>
            <Card.Description>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setStudent({ ...student, name: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={emailId}
                    onChange={(e) => {
                      setStudent({ ...student, emailId: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setStudent({ ...student, password: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Std</label>
                  <input
                    type="text"
                    required
                    value={std}
                    onChange={(e) => {
                      setStudent({ ...student, std: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Image</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => {
                      setStudent({ ...student, imageUrl: e.target.value });
                    }}
                  />
                </Form.Field>
              </Form>
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <Button inverted color="green" onClick={(e) => sendDataToAPI(e)}>
              Submit
            </Button>
            <Link to={"/show-student"}>
              <Button color="black">Back</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default UpdateStudent;
