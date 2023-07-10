import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
export function CNavbar() {
  const links = [
    {
      name: "Store",
      link: "/store",
      canvas: "store",
    },
    {
      name: "Mac",
      link: "/component",
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
  const [showCollapse, setShowCollapse] = useState(false);

  const handleClick = () => {
    setShowCollapse(false);
  };
  return (
    <div>
      <div className="navbar-bg">
        <Navbar expand="lg">
          <Container className="c-gap">
            <img src="images/logo-va.png" alt="" width={50} height={20}></img>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={()=> setShowCollapse(!showCollapse)}
            />
            <Navbar.Collapse id="basic-navbar-nav" in={showCollapse}>
              <Nav className="c-gap c-collapse">
                {links.map((item, index) => (
                  <div>
                    <Link to={item.link} className="navbar-text" onClick={handleClick}>
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
    </div>
  );
}
