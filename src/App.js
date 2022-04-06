import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import { User } from "./component/User";
import { Users } from "./component/Users";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Users /> </Route>
        <Route path="/:userId" children={<User />}></Route>
      </Switch>
    </Router>
  );
}
