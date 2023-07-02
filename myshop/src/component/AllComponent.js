import "../App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Pagination from "react-bootstrap/Pagination";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
export function AllComponent() {
  const [show, setShow] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <div>
      <Alert show={show} variant="warning">
        <Alert.Heading>Warning</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      <h1>+ Breadcrumb : kiểu menu</h1>
      <Breadcrumb>
        <Breadcrumb.Item href="https://facebook.com">Facebook</Breadcrumb.Item>
        <Breadcrumb.Item href="https://instagram.com">
          Instagram
        </Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item>
      </Breadcrumb>
      <h1>+ Accordion : đhs lại dịch ra lại là đàn phong cầm</h1>
      <Accordion defaultActiveKey="0" flush>
        {/* defaultActiveKey để mở sẵn 1 accordion nào đó , flush để xóa viền, màu  */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h1>+ Alert : báo động </h1>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      <h1>+ Button, ButtonGroup,ButtonToolbar : nút, nhóm nút</h1>
      <Button variant="warning" size="lg">
        Hello
      </Button>
      <br></br>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
      <br></br>
      <h1>+ Card : thẻ</h1>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../image/logo-va.png" />
          <Card.Body>
            <Card.Title>Nature</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.freepik.com/free-photos-vectors/nature-background"
            >
              Explore
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          />
          <Card.Body>
            <Card.Title>Nature</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.freepik.com/free-photos-vectors/nature-background"
            >
              Explore
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          />
          <Card.Body>
            <Card.Title>Nature</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.freepik.com/free-photos-vectors/nature-background"
            >
              Explore
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          />
          <Card.Body>
            <Card.Title>Nature</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.freepik.com/free-photos-vectors/nature-background"
            >
              Explore
            </Button>
          </Card.Body>
        </Card>
      </div>
      <h1>+ Carousel : kiểu slide</h1>
      {showCarousel && (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
              alt="First slide"
              height={720}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
              alt="Second slide"
              height={720}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
              alt="Third slide"
              height={720}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      <h1>+ CloseButton : nút đóng</h1>
      <CloseButton onClick={() => setShowCarousel(!showCarousel)} />

      <h1>+ Dropdown : thả xuống</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
      <h1>+ Figure : ảnh</h1>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <br></br>
      <h1>+ Image : ảnh</h1>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
        thumbnail
        fluid
      />
      <br></br>
      <h1>+ ListGroup : group</h1>
      <ListGroup>
        <ListGroup.Item action variant="primary">
          Primary
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Secondary
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Success
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Danger
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Warning
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Info
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item
          action
          variant="dark"
          onClick={() => setShowModal(true)}
        >
          Open modal
        </ListGroup.Item>
      </ListGroup>
      <br></br>
      <h1>+ Modal : modal</h1>
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
              <CloseButton
                style={{ marginRight: "5px" }}
                onClick={() => setShowModal(false)}
              />
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      <br></br>
      <h1>+ Navbar : navbar</h1>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <h1>+ Offcanvas : vải bố là qq gì</h1>
      <Button variant="primary" onClick={() => setShowOffcanvas(true)}>
        Mở Offcanvas
      </Button>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="top"
        scroll="true"
        autoFocus="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Đéo hiểu sao offcanvas là vải bố</Offcanvas.Body>
      </Offcanvas>
      <br></br>
      <h1>+ OverlayTrigger + Tooltip : tooltip</h1>
      <OverlayTrigger
        placement="right"
        delay={{ show: 150, hide: 300 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      <br></br>
      <h1>+ Pagination : pagination</h1>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

      <br></br>
      <h1>+ ProgressBar : tiến độ</h1>
      <ProgressBar striped animated variant="success" now={40} label={40} />
      <br></br>
      <ProgressBar striped animated variant="info" now={20} label={20} />
      <br></br>
      <ProgressBar striped animated variant="warning" now={60} label={60} />
      <br></br>
      <ProgressBar striped animated variant="danger" now={80} label={80} />
      <br></br>
      <h1>+ Spinner : loading</h1>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />

      <br></br>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          striped="columns"
        />
        Loading...
      </Button>
      <br></br>
      <h1>+ Table : bảng</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>

      <br></br>
      <h1>+ Tabs : tab</h1>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
      <br></br>
      <h1>+ Toast : Toast</h1>
      <Button variant="success" onClick={() => setShowToast(!showToast)}>
        Toast
      </Button>

      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1, position: "fixed" }}
      >
        <Toast
          bg={"warning"}
          onClose={() => setShowToast(false)}
          animation
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Facebook</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Xin chào, bạn có một tin nhắn từ Facebook</Toast.Body>
        </Toast>
      </ToastContainer>

      <div style={{ height: "500px" }}></div>
    </div>
  );
}
