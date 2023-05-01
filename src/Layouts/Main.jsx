import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import AsideLeft from '../Pages/Shared/AsideLeft';
import AsideRight from '../Pages/Shared/AsideRight';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import NavigationBar from '../Pages/Shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={3}><AsideLeft/></Col>
                    <Col lg={6}><Outlet /></Col>
                    <Col lg={3}><AsideRight /></Col>
                </Row>
            </Container>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;