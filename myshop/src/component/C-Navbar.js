import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/Navbar.css";
export function CNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div className="navbar-bg">
      <Navbar expand="lg">
        <Container className="gap-30">
          <img src="images/logo-va.png" alt="" width={50} height={20}></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" gap-30">
              <Link
                to={"/"}
                className="navbar-text"
                onMouseEnter={() => setShowOffcanvas(true)}
                onClick={() => setShowOffcanvas(false)}
              >
                Store
              </Link>
              <Link to={"/component"} className="navbar-text">
                Mac
              </Link>
              <Link to={"/component"} className="navbar-text">
                iPad
              </Link>
              <Link to={"/component"} className="navbar-text">
                iPhone
              </Link>
              <Link to={"/component"} className="navbar-text">
                Watch
              </Link>
              <Link to={"/component"} className="navbar-text">
                Support
              </Link>
              <Link to={"/component"} className="navbar-text">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>

          <div className="c-nav-icon">
            <i class="fa-solid fa-magnifying-glass fa-sm"></i>
            <i class="fa-brands fa-square-facebook fa-sm"></i>
            <i class="fa-brands fa-instagram fa-sm"></i>
            <i class="fa-brands fa-youtube fa-sm"></i>
            <i class="fa-brands fa-tiktok fa-xs"></i>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        className="c-offcanvas"
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        onMouseLeave={() => setShowOffcanvas(false)}
        backdrop={false}
        placement="top"
        style={{ top: "50px" }}
      >
        <div className="cflex">
          <div>
            <Offcanvas.Header>
              <Offcanvas.Title>Store</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Danh sách store trên toàn quốc</Offcanvas.Body>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}
