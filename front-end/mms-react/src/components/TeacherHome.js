import React, { useState } from "react";
import classes from "./TeacherHome.module.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  GridColumn,
  Icon,
  Image,
} from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { logOut } from "./CheckTeacherLogin";

const TeacherHome = () => {
  let navigate = useNavigate();

  const loginData = localStorage.getItem("TeacherData");
  const loginData2 = JSON.parse(loginData);

  function ShowStatus(props) {
    if (!props.value) {
      return <p className={classes.failstatus}>Not Recieved</p>;
    } else {
      return <p className={classes.successStatus}> Recieved</p>;
    }
  }

  const logOutTeacher = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <div className={classes.image}></div>
      <div className={classes.content}>
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
              color="red"
              onClick={() => {
                logOutTeacher();
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherHome;
