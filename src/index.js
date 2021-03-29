import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [users, setUsers] = useState([]);
  const saveUsers = (data) => {
    setUsers(data);
  };
  console.log(users);
  return (
    <Router>
      <Link to="/users">Users</Link>
      <Switch>
        <Route path="/users">
          <Users users={saveUsers} />
        </Route>
        <Route path="/users/:id">
          <UserDetails users={users} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
