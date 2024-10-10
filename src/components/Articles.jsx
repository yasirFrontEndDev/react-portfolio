import React from 'react';
import Images from '../assets/images/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Articles = () => {
    const allArticles = [
        {
            articleImage: Images.article1,
            dateTime: 'October 10, 2024',
            userRole: 'Admin',
            title: 'The Future of IT: Innovations That Will Shape Businesses',
            description: 'Discover the cutting-edge trends in technology that are driving growth and transforming businesses across industries.',
        },
        {
            articleImage: Images.article2,
            dateTime: 'October 7, 2024',
            userRole: 'User',
            title: 'Leveraging AI to Drive Business Efficiency',
            description: 'Learn how AI is being adopted by companies to automate processes, enhance productivity, and improve decision-making.',
        },
        {
            articleImage: Images.article3,
            dateTime: 'September 29, 2024',
            userRole: 'Admin',
            title: 'Digital Transformation: Key Strategies for Success',
            description: 'Explore the essential strategies for successful digital transformation in today’s fast-paced business environment.',
        },
    ];

    return (
        <section className='about_Section py-5' id='about'>
            <div className="container sectionTitle">
                <h2>Latest Articles</h2>
                <p className='text-dark fw-light'>Stay updated with the latest news, trends, and insights from the world of technology and business.</p>
                <div className="row gy-3">
                    {allArticles.map((article, index) => (
                        <div key={index} className="col-lg-4">
                            <div className='py-3'>
                                <div className='card border-0 shadow-lg'>
                                    <div className="teamImg">
                                        <img src={article.articleImage} className='img-fluid card-img-top' alt="article" />
                                    </div>
                                    <div className="card-body text-start">
                                        <div className="d-flex mb-2">
                                            <span className='me-3'>
                                                <FontAwesomeIcon className='textCherry me-1' icon={faCalendar} />
                                                <span>{article.dateTime}</span>
                                            </span>
                                            <span>
                                                <FontAwesomeIcon className='textCherry me-1' icon={faCircleUser} />
                                                <span>{article.userRole}</span>
                                            </span>
                                        </div>
                                        <h4 className="card-title fw-bold">{article.title}</h4>
                                        <p className="card-text text-dark fw-light">{article.description}</p>
                                        <a href="#/" className='textCherry'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
