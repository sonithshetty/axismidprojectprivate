import React, { useEffect, useState } from "react";
import classes from "./AdminLogin.module.css";
import { Form, Button, Card, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
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
    backdata.find((element) => {
      if (element.emailId == emailId && element.password == password) {
        alert("Login Successful");
        localStorage.setItem("AdminData", JSON.stringify(element));
        navigate("/admin-home");
      } else if (element.emailId != emailId && element.password == password) {
        alert("Email is Wrong!!");
      } else if (element.emailId == emailId && element.password != password) {
        alert("Password is Wrong!!");
      } else {
        alert("Invalid Login Credentials");
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8081/school").then((response) => {
      setBackData(response.data);
    });
  }, []);

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <Card>
          <Image
            src="https://img.freepik.com/free-vector/illustration-customer-service-concept_53876-5883.jpg?w=826&t=st=1678812541~exp=1678813141~hmac=858fb886c9cecac6b1f78cc14a89f0511f91d867d04c5d908bf0270588f81f18"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header textAlign="center">Admin Login</Card.Header>
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
              Login
            </Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
