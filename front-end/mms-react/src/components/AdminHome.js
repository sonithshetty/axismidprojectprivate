import { Link } from "react-router-dom";
import classes from "./AdminHome.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";

const AdminHome = () => {
  const [school, setSchool] = useState([]);
  const [totalFund, setTotalFund] = useState();
  const [totalMoneySpent, setTotalMoneySpent] = useState();
  const [totalMoneyEarned, setTotalMoneyEarned] = useState();

  useEffect(() => {
    axios.get("http://localhost:8081/school/totalFunds").then((response) => {
      setTotalFund(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/school/totalMoneySpent")
      .then((response) => {
        setTotalMoneySpent(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/school/totalMoneyEarned")
      .then((response) => {
        setTotalMoneyEarned(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8081/school").then((response) => {
      setSchool(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        <div className={classes.main}>
          <div className={classes.navbar}>
            <Link to={"/admin-login"} className={classes.ulist1}>
              Logout
            </Link>
          </div>
          <div className={classes.container}>
            <Link to={"/add-teacher"} className={classes.ulist1}>
              Add Teacher
            </Link>

            <Link to={"/add-student"} className={classes.ulist1}>
              Add Student
            </Link>

            <Link to={"/show-teacher"} className={classes.ulist1}>
              Show Teacher
            </Link>

            <Link to={"/show-student"} className={classes.ulist1}>
              Show Student
            </Link>
          </div>
          <div>
            <Card>
              <Card.Content>
                <Card.Header>
                  Total FUNDS <Icon name="rupee sign" />
                  {totalFund}
                </Card.Header>
                <hr />
                <Card.Header>
                  TotalMoneyEarned - <Icon name="rupee sign" />
                  {totalMoneyEarned}
                </Card.Header>
                <hr />

                <Card.Header>
                  TotalMoneySpent - <Icon name="rupee sign" />
                  {totalMoneySpent}
                </Card.Header>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
