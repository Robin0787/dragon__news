import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AsideRight from '../Pages/Shared/AsideRight';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import NavigationBar from '../Pages/Shared/NavigationBar';

const NewsLayouts = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={9}><Outlet /></Col>
                    <Col lg={3}><AsideRight /></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsLayouts;