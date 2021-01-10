import * as ReactBootstrap from 'react-bootstrap';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <ReactBootstrap.Navbar bg="light" expand="lg" className="navbar">
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mx-auto">
                <ReactBootstrap.Nav.Link href="#about" className="nav-link">About</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#team" className="nav-link">Team</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#events" className="nav-link">Events</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#contact-us" className="nav-link">Contact Us</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#join" className="nav-link">Join</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
    )
}

export default Navbar;