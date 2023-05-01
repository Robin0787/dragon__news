import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights';

const AsideLeft = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1545/')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return (
            <>
                <ListGroup>
                {
                    categories.map((category) => <ListGroup.Item className='py-3' key={category.id}><Link to={`/category/${category.id}`} >{category.name}</Link></ListGroup.Item>)
                }
            </ListGroup>
            <EditorsInsights xs={1} md={1} lg={1}/>
            </>
    );
};

export default AsideLeft;