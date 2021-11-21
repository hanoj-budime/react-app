/** React */
import React from "react";
import ReactDom from "react-dom";
/** Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { From } from "./component/From";

function BookList() {
  return (
    <React.StrictMode>
      <Container>
        <From></From>
      </Container>
    </React.StrictMode>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
