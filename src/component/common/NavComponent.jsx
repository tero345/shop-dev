import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

/**
 * Link : 페이지를 이동할때 사용(클릭 시 페이지가 바로 변환되어야 할때 사용)
 * useNavigator : navigator라는 변수에 저장(페이지 전환 시 추가로 처리해야하는 로직이 있을 때 사용)
 */

export default function NavComponent() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/event">Event</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}
