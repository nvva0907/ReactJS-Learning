import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/Navbar.css";
export function CNavbar() {
  // const [showOffcanvas, setShowOffcanvas] = useState(null);
  const links = [
    {
      name: "Store",
      link: "/store",
      canvas: "store",
    },
    {
      name: "Mac",
      link: "/mac",
      canvas: "mac",
    },
    {
      name: "iPad",
      link: "/ipad",
      canvas: "ipad",
    },
    {
      name: "iPhone",
      link: "/iphone",
      canvas: "iphone",
    },
    {
      name: "Watch",
      link: "/watch",
      canvas: "watch",
    },
    {
      name: "Support",
      link: "/support",
      canvas: "support",
    },
    {
      name: "Contact",
      link: "/contact",
      canvas: "contact",
    },
  ];

  // const handleOpenCanvas = (id) => {
  //   setShowOffcanvas(id);
  // };
  // const handleCloseCanvas = () => {
  //   setShowOffcanvas(null);
  // };
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <div className="navbar-bg">
        <Navbar expand="lg">
          <Container className="c-gap">
            <img src="images/logo-va.png" alt="" width={50} height={20}></img>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="c-gap c-collapse">
                {links.map((item, index) => (
                  <div>
                    <Link
                      to={item.link}
                      className="navbar-text"
                      onClick={() => setCollapsed(false)}
                      // onMouseEnter={() => handleOpenCanvas(item.canvas)}
                      // onClick={() => handleCloseCanvas()}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
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
      </div>

      {/* canvas */}
      {/* <div>
        <Offcanvas
          className="offcanvas"
          show={showOffcanvas === "store"}
          onHide={() => setShowOffcanvas(false)}
          onMouseLeave={() => setShowOffcanvas(false)}
          backdrop={false}
          placement="top"
        >
          <div>
            <Offcanvas.Header>
              <Offcanvas.Title>Store</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Danh sách store trên toàn quốc</Offcanvas.Body>
          </div>
        </Offcanvas>
      </div> */}
    </div>
  );
}
