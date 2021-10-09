import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { Link } from "react-router-dom";
export default function navbars({ itemCount }) {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand style={{ display: "flex" }}>
            <img
              src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Happay"
            />
            {/* <Link to="/"> */}
            <h4 style={{ color: "#528be1", textDecoration: "none" }}>Happay</h4>
            {/* </Link> */}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* <Link to="/cart"> */}
              <Badge color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />{" "}
              </Badge>
              {/* </Link> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
