import { Container, Row } from "react-bootstrap";
import "./App.css";
import About from "./components/about";
import Demos from "./components/demos";
import Footer from "./components/footer";
import Form from "./components/form";
import Header from "./components/header";
import Home from "./components/home";
import Navs from "./components/navBar";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <Navs />
      <section id="home">
        <Home />
      </section>
      <section className="about-demos">
        <Container>
          <Row xs={1} lg={2} md={2}>
            <Demos />
            <About />
          </Row>
        </Container>
      </section>
      <section id="contact-us">
        <Form />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
