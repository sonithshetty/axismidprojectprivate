import React, { useEffect, useState } from "react";
import classes from "./StudentLogin.module.css";
import { Card, Image, Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [backdata, setBackData] = useState([]);

  const emailChange = (event) => {
    setEmailId(event.target.value);
  };

  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = backdata.find((element) => element.emailId == emailId);
    if (user && user.password == password) {
      alert("Login Successful");
      localStorage.setItem("StudentData", JSON.stringify(user));
      navigate("/student-home");
    } else {
      alert("Invalid Login Credentials");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8082/students").then((response) => {
      setBackData(response.data);
    });
  }, []);

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <Card>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header textAlign="center">Student Login</Card.Header>
            <br />
            <Card.Meta>
              <span>Enter Your Credentials</span>
            </Card.Meta>
            <Card.Description>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input
                    required
                    autoComplete="off"
                    name="emailId"
                    type="email"
                    value={emailId}
                    id="emailId"
                    onChange={emailChange}
                    placeholder="Enter your email"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    required
                    name="password"
                    type="password"
                    value={password}
                    id="password"
                    onChange={passChange}
                    placeholder="Enter your password"
                  />
                </Form.Field>
              </Form>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button fluid color="green" onClick={submitHandler}>
              Submit
            </Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default StudentLogin;
