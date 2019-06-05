import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function MyNavbar(props) {
  return (
  <div className="wrap">
  <Navbar bg="primary" variant="dark" sticky="top">
  <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Click an image to begin.
    </Navbar.Text>
  </Navbar.Collapse>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Score: {props.children}{props.score} | Top Score: {props.children}{props.best} 
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>
  );
}

export default MyNavbar;
