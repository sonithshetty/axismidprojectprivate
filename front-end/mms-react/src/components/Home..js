import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>MONEY MANAGEMENT SYSTEM</h1>
      </div>
      <div className={classes.navbar}>
        <Link to={"/admin-login"} className={classes.ulist1}>
          Admin Login
        </Link>

        <Link to={"/student-login"} className={classes.ulist1}>
          Student Login
        </Link>

        <Link to={"/teacher-login"} className={classes.ulist1}>
          Teacher Login
        </Link>

        <h4>Sonit Shetty - Axis11JFSB1117</h4>
      </div>
      <div className={classes.main}>
        <h2>About Project</h2>
        <p>
          This project helps the school or the admin to track the expense and
          income occuring in the school fund.
        </p>
        <div className={classes.column}>
          <div className={classes.head}>Admin Page</div>
          <div className={classes.content}>
            <section>
              <p>Functionalities : </p>
            </section>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.head}>Teacher Page</div>
          <div className={classes.content}>
            <section>
              <p>Functionalities : </p>
            </section>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.head}>Student Page</div>
          <div className={classes.content}>
            <section>
              <p>Functionalities : </p>
            </section>
          </div>
        </div>
        <main>
          <h4>Technologies Used</h4>
          <section>
            <h5>Front End : </h5>
            <p></p>
          </section>
          <section>
            <h5>Back End : </h5>
            <p></p>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Home;
