import { Figure } from "react-bootstrap";
import "../css/LandingPageCss.css";
export function LandingPage() {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={1920}
          height={1080}
          alt="171x180"
          src="images/mac-pro.jpeg"
        />
      </Figure>
    </div>
  );
}
