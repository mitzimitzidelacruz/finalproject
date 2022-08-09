import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import useAuth from '../auth/useAuth';

function NavBar() {

    const { logout } = useAuth();

    const { t } = useTranslation();

    function changeLanguage(language) {
        i18next.changeLanguage(language);
    }

    return (
        <Navbar className='nav' collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className='main'>{t("home")}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Admin" className='main'>
                        <Nav.Link href='/admin/users' className='link'>Usuarios</Nav.Link>
                    </NavDropdown>
                    <Nav.Link href='/add' className='link'>{t("logs")}</Nav.Link>
                    <Nav.Link href='/list' className='link'>{t("list")}</Nav.Link>
                    <Nav.Link href='/account' className='link'>{t("account")}</Nav.Link>
                    <Nav.Link onClick={() => changeLanguage("en")} className='link'>En</Nav.Link>
                    <Nav.Link onClick={() => changeLanguage("es")} className='link'>Es</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href='/register' className='link'>{t("registerU")}</Nav.Link>
                    <Nav.Link href='/login' className='link'>{t("login")}</Nav.Link>
                    <Nav.Link href='/' onClick={logout} className='link'>{t("logout")}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
  
  export default NavBar;