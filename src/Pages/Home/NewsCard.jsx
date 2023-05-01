import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author, total_view, rating} = news;
    return (
        <Card className="mb-5 text-start">
      <Card.Header>
        <div className='d-flex align-items-center gap-2'>
            <Image src={author?.img} style={{height: '40px'}} roundedCircle/>
            <div className='ps-2 flex-grow-1 mt-2'>
                <p className='mb-0'>{author?.name}</p>
                <p><small>{moment(author.published_date).format('DD MMMM, YYYY')}</small></p>
            </div>
            <div className='d-flex gap-2'>
                <FaRegBookmark />
                <FaShareAlt />
            </div>
        </div>
      </Card.Header>
      <Card.Img variant='top' src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {
            details.length < 250 ?
             <>{details}</> : 
             <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link></>
            }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className='text-warning '>
            <Rating
                placeholderRating={rating.number || 3}
                emptySymbol={<FaRegStar />}
                fullSymbol={<FaStar />}
                placeholderSymbol={<FaStar />}
                readonly
            >
            </Rating>
            <small className='text-black ms-2'>{rating?.number}</small>
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <FaEye />
            {total_view}
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;