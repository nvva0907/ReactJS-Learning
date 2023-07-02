import { CNavbar } from "../component/C-Navbar";
import { Routes, Route } from "react-router-dom";
import { AllComponent } from "../component/AllComponent";
import { LandingPage } from "./LandingPage";
export function Home() {
  return (
    <div>
      <div style={{ position: "fixed", width: "100vw" }}>
        <CNavbar></CNavbar>
      </div>

      <div style={{paddingTop:"50px"}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/component" element={<AllComponent />} />
        </Routes>
      </div>
    </div>
  );
}
