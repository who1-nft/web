import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import ROUTES from '../../constants/route';
import User from '../user/User';

export default function Header() {
  const user = null;
  return (
    <Navbar collapseOnSelect expand='lg' bg='light'>
      <Container className='p-3'>
        <Navbar fixed='top' />
        <Navbar.Brand href={ROUTES.ROOT}>
          <img
            alt=''
            src='/favicon.ico'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          who 1
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <div className='mx-5 w-50'>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </div>
          <Nav className='me-auto'>
            <Nav.Link href={ROUTES.EXPLORE}>Explore</Nav.Link>
            <Nav.Link href={ROUTES.STATS}>Stats</Nav.Link>
            <Nav.Link href={ROUTES.MYONE}>MyOne</Nav.Link>
            <Nav.Link href={ROUTES.REQUEST}>NFT</Nav.Link>
          </Nav>
          <User />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
