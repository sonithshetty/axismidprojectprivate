import classes from "./Home.module.css";
import { Button, Card, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.header}></div>
      <div className={classes.content}>
        <div className={classes.row}>
          {/* <div className={classes.column}>
            <Header textAlign="center" as="h2">
              Holy Family Convent High School
            </Header>
            <p>(Money Management System)</p>

            <p>Vision:</p>
            <ul>
              <li>
                Our vision is to forge strong, positive connections with
                students so they can achieve independence, build confidence, and
                gain academic knowledge.
              </li>
              <li>
                We aim to develop well-rounded and thoughtful students prepared
                to cope with a changing post-modern and globalized world.
              </li>
            </ul>
            <p>Mission:</p>
            <ul>
              <li>
                Our mission is to provide a safe haven where everyone is valued
                and respected. All staff members, in partnership with parents
                and families are fully committed to students’ college and career
                readiness. Students are empowered to meet current and future
                challenges to develop social awareness, civic responsibility,
                and personal growth.
              </li>
            </ul>
          </div> */}
          <div className={classes.column}>
            <Card.Group className={classes.card}>
              <Card fluid color="brown">
                <Card.Content>
                  <Card.Header textAlign="center">Login</Card.Header>
                  <br />
                  <Card.Meta>
                    For School Admins, Teachers and Students of Holy Family
                    Convent High School
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui four buttons">
                    <Button.Group>
                      <Link to={"/admin-login"}>
                        <Button basic color="black">
                          Admin
                        </Button>
                      </Link>
                      <Button.Or text="|" />
                      <Link to={"/teacher-login"}>
                        <Button basic color="brown">
                          Teacher
                        </Button>
                      </Link>
                      <Button.Or text="|" />
                      <Link to={"/student-login"}>
                        <Button basic color="black">
                          Student
                        </Button>
                      </Link>
                    </Button.Group>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <strong>By Sonit Harish Shetty (Axis11JFSB1117)</strong>
      </div>
    </div>
  );
};
export default Home;
