import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';

const NewsDetails = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Button variant="danger">
                        <Link className='text-white underline-0' to={`/category/${category_id}`}>
                            All New in this Category <FaArrowRight /> </Link>
                    </Button>
                </Card.Body>
            </Card>
            <EditorsInsights xs={1} md={2} lg={3}/>
        </>
    );
};

export default NewsDetails;