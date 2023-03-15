import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Card, Image } from "semantic-ui-react";
import classes from "./UpdateTeacher.module.css";
import axios from "axios";

const UpdateTeacher = () => {
  let navigate = useNavigate();

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
      imageUrl: "",
    },
    []
  );

  const {
    school_id,
    firstName,
    lastName,
    emailId,
    password,
    salaryEarned,
    imageUrl,
  } = teacher;

  useEffect(() => {
    loadUsers();
  }, []);

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = teacher;
    axios
      .put(`http://localhost:8082/teachers/${id}`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Teacher updated successfully");
        window.location.reload();
      });
    navigate("/show-teacher");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8082/teachers/${id}`);
    setTeacher(result.data);
  };

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <Card>
          <Image size="tiny" src={teacher.imageUrl} wrapped ui={false} />

          <Card.Content>
            <Card.Header textAlign="center">Update Teacher details</Card.Header>

            <Card.Meta>
              <span>Enter Your New Credentials</span>
            </Card.Meta>
            <Card.Description>
              <Form>
                <Form.Field>
                  <label>FirstName</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => {
                      setTeacher({ ...teacher, firstName: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>LastName</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => {
                      setTeacher({ ...teacher, lastName: e.target.value });
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
                      setTeacher({ ...teacher, emailId: e.target.value });
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
                      setTeacher({ ...teacher, password: e.target.value });
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Image</label>
                  <input
                    type="text"
                    required
                    placeholder="Paste your Image Url"
                    onChange={(e) => {
                      setTeacher({ ...teacher, imageUrl: e.target.value });
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
            <Link to={"/show-teacher"}>
              <Button color="black">Back</Button>
            </Link>
          </Card.Content>
        </Card>
        {/* <Form>
            <Form.Field>
              <label>FirstName</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => {
                  setTeacher({ ...teacher, firstName: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>LastName</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => {
                  setTeacher({ ...teacher, lastName: e.target.value });
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
                  setTeacher({ ...teacher, emailId: e.target.value });
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
                  setTeacher({ ...teacher, password: e.target.value });
                }}
              />
            </Form.Field>

            <Button onClick={(e) => sendDataToAPI(e)}>Submit</Button>
          </Form> */}
      </div>
    </div>
  );
};

export default UpdateTeacher;
