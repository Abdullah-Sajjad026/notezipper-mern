import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import {Link} from "react-router-dom";
function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Note Zipper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>

                        <Nav>
                            <Nav.Link>
                                <Link to="/mynotes">My Notes</Link>
                            </Nav.Link>
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/myprofile">My Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;
