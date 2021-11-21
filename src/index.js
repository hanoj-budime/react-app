/** React */
import React from "react";
import ReactDom from "react-dom";
/** Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Counter } from "./component/counter";
import { Users } from "./component/Users";

function BookList() {
  return (
    <React.StrictMode>
      <Container>
        <Counter></Counter>
        <Users></Users>
      </Container>
    </React.StrictMode>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
