import moment from 'moment';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png';

const Header = () => {

    return (
        <Container className='mb-3'>
            <div className="text-center">
                <img src={logo} className="" />
                <p className='text-center'><small>Journalism without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-5 bg-light my-2 p-2'>
                <Button variant='danger'>Latest</Button>
                <Marquee pauseOnHover='true' speed={80}>I can be a React component, multiple React components, or just some text.</Marquee>
            </div>
        </Container>
    );
};

export default Header;