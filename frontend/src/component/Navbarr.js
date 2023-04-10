/** @format */

import React from "react";
import { Navbar,Container,Offcanvas,Nav } from "react-bootstrap";
import taskManagerLogo from "./images/TaskDuty Logo.png";
import profilePhoto from "./images/Profile photo.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  const styling = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="p-3">
          <Container fluid>
            <Link to="/">
              <img src={taskManagerLogo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body className="p-4 text-center flex-lg-row-reverse align-items-lg-center gap-3">
                <div className="d-flex justify-content-between justify-content-lg-end flex-row-reverse">
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <img style={{ width: "50px" }} src={profilePhoto} alt="" />
                </div>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                  <Link style={styling} to="/create">New Task</Link>
                  <Link style={styling} to="/tasks">All Task</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbarr;
