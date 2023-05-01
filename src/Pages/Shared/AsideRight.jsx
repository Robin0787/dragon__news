import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import bg from '../../assets/bg.png';
import QZone from './Q-Zone';
const AsideRight = () => {
    return (
        <div>
            <Button className='mb-2 w-100' variant='outline-primary'><FaGoogle /> Continue with Google</Button>
            <Button variant='outline-secondary w-100'><FaGithub /> Continue with Github</Button>
            <div className='my-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <h5 className='my-3'>Q-Zone</h5>
            <QZone />
            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='position-absolute top-0 mt-5 text-light text-center'>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='outline-danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default AsideRight;