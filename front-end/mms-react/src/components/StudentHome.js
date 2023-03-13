import React, { useState } from "react";
import classes from "./StudentHome.module.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  GridColumn,
  Icon,
  Image,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentHome = () => {
  let navigate = useNavigate();

  const loginData = localStorage.getItem("StudentData");
  const loginData2 = JSON.parse(loginData);

  const feesBody = {
    id: loginData2.id,
    school_id: 1,
    name: loginData2.name,
    emailId: loginData2.emailId,
    password: loginData2.password,
    std: loginData2.std,
    feesPaid: true,
    feesTotal: 15000.0,
    fees: 15000.0,
    remainingFees: loginData2.remainingFees,
    imageUrl: loginData2.imageUrl,
  };

  const payFees = () => {
    axios
      .put(`http://localhost:8082/students/${loginData2.id}`, feesBody)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data);
        localStorage.setItem("StudentData", JSON.stringify(feesBody));
        window.location.reload();
        // localStorage.setItem("StudentData", JSON.stringify(response.data));
      });
  };

  function ShowStatus(props) {
    if (!props.value) {
      return <p className={classes.failstatus}>Not Paid</p>;
    } else {
      return <p className={classes.successStatus}> Paid</p>;
    }
  }

  function DisplayButton({ feesPaid }) {
    let btn = null;
    if (feesPaid == "FALSE") {
      btn = (
        <Button color="teal" onClick={payFees} className={classes.paysalary}>
          Pay Fees
        </Button>
      );
    }
    return <div>{btn}</div>;
  }

  return (
    <div>
      <Grid centered columns={6}>
        <GridColumn className={classes.column}>
          <Card>
            <Image src={loginData2.imageUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>User Details:</Card.Header>
              <Card.Description>
                <b>Name:</b> {loginData2.name}
              </Card.Description>
              <Card.Description>
                <b>EmailId:</b> {loginData2.emailId}
              </Card.Description>
              <Card.Description>
                <b>Std:</b> {loginData2.std}
              </Card.Description>
              <Card.Description>
                <b>Fee Status</b>
                <Icon name="rupee sign" />
                <ShowStatus value={loginData2.feesPaid} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="id badge" />
                Id No : {loginData2.id}
              </a>
            </Card.Content>
            <CardContent textAlign="center">
              <DisplayButton
                feesPaid={String(loginData2.feesPaid).toUpperCase()}
              />
              <div className={classes.space}></div>

              <Button color="red" onClick={() => navigate("/")}>
                Logout
              </Button>
            </CardContent>
          </Card>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default StudentHome;
