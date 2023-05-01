import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider/AuthProvider';
import profile from '../../assets/blank-profile.webp';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext);
    function handleLogOut () {
        logOut()
        .then(() => {
            toast.success('LogOut Successful');
        })
    }
    return (
        <Container className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'>Home</Link>
                    <Link className='ms-3' to='/'>About</Link>
                    <Link className='ms-3' to='/login'>Login</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='d-flex justify-center items-center ms-auto'>
                            <Nav.Link href="#profile"><img src={profile} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid gray', padding: '5px' }} /></Nav.Link>
                            {
                                user ?
                                    <div className='d-flex align-items-center gap-2'>
                                        {user && <h6>{user.displayName}</h6>}
                                        <Button onClick={handleLogOut} className='p-1 fs-6' variant='secondary'>LogOut</Button>
                                    </div>
                                    :
                                    <Button variant='secondary'><Link className='text-light text-decoration-none' to={'/login'}>Login</Link></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;