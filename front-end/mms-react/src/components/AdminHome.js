import { Link, useNavigate } from "react-router-dom";
import classes from "./AdminHome.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import { logOut } from "./CheckAdminLogin";

const AdminHome = () => {
  let navigate = useNavigate();
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

  const logoutAdmin = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <div className={classes.image}></div>
      <div className={classes.main}>
        <div className={classes.content}>
          <Grid centered columns={2} divided>
            <Grid.Row>
              <Grid.Column width={7}>
                <Card color="black">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3373/3373447.png"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header textAlign="center">Teachers</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Link to={"/add-teacher"}>
                      <Button fluid color="olive">
                        <Icon name="add user" />
                        Add Teacher
                      </Button>
                    </Link>
                    <br />
                    <Link to={"/show-teacher"}>
                      <Button fluid color="olive">
                        {/* <Icon name="eye" /> */}
                        Show All Teachers
                      </Button>
                    </Link>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={7}>
                <Card color="black">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3048/3048425.png"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header textAlign="center">Students</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Link to={"/add-student"}>
                      <Button fluid color="olive">
                        <Icon name="add user" />
                        Add Student
                      </Button>
                    </Link>
                    <br />
                    <Link to={"/show-student"}>
                      <Button fluid color="olive">
                        {/* <Icon name="eye" /> */}
                        Show All Students
                      </Button>
                    </Link>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered columns={1}>
            <Grid.Column width={20}>
              <Card color="black">
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
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column textAlign="center">
              <Button
                inverted
                size="large"
                color="red"
                onClick={() => {
                  logoutAdmin();
                }}
                className={classes.ulist1}
              >
                Logout
              </Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
