// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

//Import Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Nav />

        <Routes>
          <Route path="/" exact element={<AboutUs />} />

          <Route path="/work" element={<OurWork />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
