import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import { Container } from "react-bootstrap";


export default function Home() {
    return (
        <div>
            <Container>
            <Navbar />
            <Hero />
            <About />
            {/* <ContactForm /> */}
            <Projects />
            <Footer />
            </Container>
        </div>
    );
}