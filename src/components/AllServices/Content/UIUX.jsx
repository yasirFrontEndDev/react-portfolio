import React from 'react'
import Images from '../../../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const UIUX = () => {

    const webDeveloperData = [
        {
            webIcon: faCircleCheck,
            webTitle: 'Omnichannel Personalization',
            webDescription: 'Delivering seamless experiences across all platforms.',
        },
        {
            webIcon: faCircleCheck,
            webTitle: 'Web App Development',
            webDescription: 'Creating secure, scalable, high-performing web apps.',
        },
        {
            webIcon: faCircleCheck,
            webTitle: 'Industry Specific Web Consulting',
            webDescription: 'Tailored web solutions for your industry needs.',
        },
        {
            webIcon: faCircleCheck,
            webTitle: 'Web Consulting & Strategy',
            webDescription: 'Comprehensive consulting for your digital projects.',
        },
    ];
    const topCategories = [
        {
            webIcon: faCubes,
            webTitle: '3D Assets',
            webDescription: 'Immersive elements',
        },
        {
            webIcon: faCubes,
            webTitle: 'Illustration',
            webDescription: 'Dimensional elements',
        },
        {
            webIcon: faCubes,
            webTitle: 'Mockups',
            webDescription: 'Realistic display devices',
        },
        {
            webIcon: faCubes,
            webTitle: 'Logos',
            webDescription: 'Immersive Logos',
        },
        {
            webIcon: faCubes,
            webTitle: 'Figma Templates',
            webDescription: 'User Interfaces',
        },
        {
            webIcon: faCubes,
            webTitle: 'Icons',
            webDescription: 'Simplified Symbols',
        },
    ];

    return (
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

            <div className="uiux_Section">
                <div className="uiux_Content">

                    <div className="py-3 uiux_Inner">

                        <div className="categories row gy-3">
                            <div className="col-lg-8">
                            <h2>UI/UX Design Services</h2>
                                <p className='mb-1'>We focus on creating seamless user experiences with a human-centered design 
                                    approach, ensuring user-friendly and aesthetically pleasing designs.</p>
                                <h2>Top Categories</h2>
                                <div className="row">
                                    {topCategories.map((catsdata,index)=>(
                                        <div key={index} className="catsInner d-flex col-lg-4">
                                        <span className="catIcon mb-2">
                                            <FontAwesomeIcon icon={catsdata.webIcon} />
                                        </span>
                                        <div className='catText'>
                                            <h4 className='mb-0'>{catsdata.webTitle}</h4>
                                            <span>{catsdata.webDescription}</span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className="imgGallery col-lg-4">
                                <img src={Images.article1} alt="ui/ux" className='img-fluid rounded-1 mb-3' />
                            </div>
                        </div>
                        <div className="cardsServices py-4">
                            <div className="row gy-4">
                                <h2>UI/UX Design Services We Offer</h2>
                                {webDeveloperData.map((webdata, index) => (
                                    <div key={index} className="col-lg-4 d-flex">
                                        <div className="service_Item position-relative aboutServicesBoth">
                                            <div className="icon mb-2">
                                                <FontAwesomeIcon icon={webdata.webIcon} />
                                            </div>
                                            <h4 className="fw-bold mb-3">
                                                <a href="#/" className="stretched-link">
                                                    {webdata.webTitle}
                                                </a>
                                            </h4>
                                            <p className="text-dark fw-light">{webdata.webDescription}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default UIUX