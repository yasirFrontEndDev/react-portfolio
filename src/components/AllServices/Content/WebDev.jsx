import React from 'react'
import Images from '../../../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes, faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const WebDev = () => {

  const webDeveloperData = [
    {
      webIcon: faCircleCheck,
      webTitle: 'Custom Web Apps',
      webDescription: 'Secure, scalable, and high-performing web applications.',
    },
    {
      webIcon: faCircleCheck,
      webTitle: 'Omnichannel Personalization',
      webDescription: 'Tailored digital solutions for all platforms.',
    },
    {
      webIcon: faCircleCheck,
      webTitle: 'Consulting & Strategy',
      webDescription: 'Expert consulting for industry-specific needs.',
    },
    {
      webIcon: faCircleCheck,
      webTitle: 'End-to-End Solutions',
      webDescription: 'Complete web development services, from concept to launch.',
    },
  ];

  return (
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

      <div className="uiux_Section">
        <div className="uiux_Content">

          <div className="py-3 uiux_Inner">


            <div className="categories row gy-3">
              <div className="col-lg-8">
                <h2>Website Development</h2>
                <p>We offer comprehensive web development services, creating high-performance digital tools that enhance efficiency and drive innovation for your business. Our team specializes in modern, responsive designs and cutting-edge technologies to ensure your website meets the latest industry standards. Whether it's a small business site or a large enterprise solution, we provide scalable and secure web development tailored to your needs.</p>

              </div>
              <div className="imgGallery col-lg-4">
                <img src={Images.article1} alt="ui/ux" className='img-fluid rounded-1 mb-3' />
              </div>

            </div>
            <div className="cardsServices py-4">
              <h2>Services We Offer</h2>
              <div className="row gy-4">
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

export default WebDev