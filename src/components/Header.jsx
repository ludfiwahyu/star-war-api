import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const homeBtn = (payload) => {
    navigate(`/`);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="" onClick={homeBtn}>
          <img
            alt=""
            src={require("../assets/icons8-star-wars-48.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Home
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
