import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
              <Navbar bg="dark" variant="dark">
                <Nav className="me-auto navbar_wrapper">
                    <Link to="/list">List Leads</Link>
                    <Link to="/add">Add Lead</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header