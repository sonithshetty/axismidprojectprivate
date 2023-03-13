import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import classes from "./UpdateTeacher.module.css";
import axios from "axios";

const UpdateSalary = () => {
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
    },
    []
  );

  const { school_id, firstName, lastName, emailId, password, salaryEarned } =
    teacher;

  useEffect(() => {
    loadUsers();
  }, []);

  const sendDataToAPI = (e) => {
    // console.log(name);
    e.preventDefault();
    // let requestBody = teacher;
    axios
      .put(`http://localhost:8082/teachers/${id}`, { salaryEarned: 30000 })
      .then((response) => {
        console.log(response.data);
        alert("Teacher updated successfully");
        window.location.reload();
      });
    navigate("/show-teacher");
    // console.log("check");
    // fetch(`http://localhost:8082/teachers/${id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ salaryEarned: 30000 }),
    // })
    //   .then((response) => {
    //     console.log(response.json()); // Handle response data
    //   })
    //   .catch((error) => {
    //     console.error(error); // Handle errors
    //   });
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8082/teachers/${id}`);
    setTeacher(result.data);
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div>
            <Form>
              <Form.Field>
                <label>Salary Earned</label>
                <input
                  type="number"
                  required
                  value={salaryEarned}
                  onChange={(e) => {
                    setTeacher({ ...teacher, salaryEarned: e.target.value });
                  }}
                />
              </Form.Field>

              <Button onClick={(e) => sendDataToAPI(e)}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSalary;
