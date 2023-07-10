import { Carousel, Figure } from "react-bootstrap";
import "../css/LandingPageCss.css";
import { Link } from "react-router-dom";
export function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {/* CAROUSEL */}
      <Carousel
        data-bs-theme="dark"
        interval="5000"
        controls={true}
        indicators={false}
      >
        <Carousel.Item>
          <Figure.Image width={980} alt="171x180" src="images/mac-pro.jpeg" />
          <div style={{ marginBottom: "120px" }}></div>
          <Carousel.Caption>
            <h3>MacBook Pro 16"</h3>
            <p className="carousel-text">Impressively big.Impossibly thin.</p>
            <p>
              <Link>Learn more</Link>
              <span style={{ marginLeft: "50px" }}></span>
              <Link>Buy</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure.Image width={980} alt="171x180" src="images/product1.png" />
          <div style={{ marginBottom: "130px" }}></div>
          <Carousel.Caption>
            <h3>Iphone | Apple Watch | Headphone</h3>
            <p>
              <Link>Learn more</Link>
              <span style={{ marginLeft: "50px" }}></span>
              <Link>Buy</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure.Image width={980} alt="171x180" src="images/vision-pro.jpg" />
          <div style={{ marginBottom: "100px" }}></div>
          <Carousel.Caption>
            <h3>Vision Pro</h3>
            <p>
              <Link>Learn more</Link>
              <span style={{ marginLeft: "50px" }}></span>
              <Link>Order</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* CTKM */}
      <div className="ctkm">
        <div className="ctkm-text">
          <p>Save on Mac or IPad</p>
          <p>for college</p>
        </div>
        <p className="ctkm-text-1">Plus get a gift card up to $150.</p>
        <Figure style={{ marginLeft: "150px" }}>
          <Figure.Image
            width={780}
            height={180}
            alt="171x180"
            src="images/ipad.png"
          />
        </Figure>
      </div>
    </div>
  );
}
