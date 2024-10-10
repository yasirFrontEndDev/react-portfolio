import React from 'react'
import Slider from "react-slick";
import Images from '../assets/images/Images'
const Team = () => {

    const teamData = [
        {
            teamImage: Images.team1,
            teamMember: 'Riyan Kelk',
            teamJd: 'Business Development Executive',
        },
        {
            teamImage: Images.team2,
            teamMember: 'Monica Belluci',
            teamJd: 'Front End Developer',
        },
        {
            teamImage: Images.team1,
            teamMember: 'Riyan Kelk',
            teamJd: 'HR Executive',
        },
        {
            teamImage: Images.team2,
            teamMember: 'Monica Belluci Kelk',
            teamJd: 'Python Developer',
        },
       
    ];


    var settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className='about_Section py-5' id='about'>
            <div className="container sectionTitle">
                <h2>Leadership Team</h2>
                <p className='text-dark fw-light'>Meet the Expert Team</p>

                <div className="slider-container">
                    <Slider {...settings}>
                        {teamData.map((teams,index)=> (
                            <div key={index} className='py-3 px-2 d-flex justify-content-center'>
                            <div className='card border-0 shadow-sm teamCard'>
                                <div className="text-center teamImg">
                                    <img src={teams.teamImage} className='img-fluid card-img-top card-img-bottom' alt="client" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{teams.teamMember}</h3>
                                    <p className="card-text textCherry fw-light">{teams.teamJd}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </Slider>
                </div>
            </div>

        </section>
    )
}

export default Team