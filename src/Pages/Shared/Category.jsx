import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Home/NewsCard';

const Category = () => {
    const category_news = useLoaderData();
    return (
        <div className='text-3xl font-semibold text-center'>
            {
                category_news.map(news => <NewsCard key={news._id} news={news}/>)
            }
        </div>
    );
};

export default Category;