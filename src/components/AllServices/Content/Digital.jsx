import React from 'react'
import Images from '../../../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const Digital = () => {
  const digitalMData = [
    {
      dmIcon: faCircleCheck,
      dmTitle: 'Online brand management',
      dmDescription: 'Boosting your brands online presence effectively.',
    },
    {
      dmIcon: faCircleCheck,
      dmTitle: 'Pay Per Click Marketing',
      dmDescription: 'Maximizing ROI through targeted ad campaigns.',
    },
    {
      dmIcon: faCircleCheck,
      dmTitle: ' Web & App Development',
      dmDescription: 'Building responsive websites and apps.',
    },
    {
      dmIcon: faCircleCheck,
      dmTitle: ' Social Media Management',
      dmDescription: 'Engaging your audience across all platforms.',
    },
  ];
  return (
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <div className="uiux_Section">
        <div className="uiux_Content">
          <div className="py-3 uiux_Inner">

            <div className="categories row gy-3">
              <div className="col-lg-8">
                <h2>Digital Marketing</h2>
                <p>We deliver results through data-driven strategies and AI-powered insights, driving traffic, increasing engagement, and maximizing sales. Our digital marketing approach is customized to target the right audience, utilizing SEO, PPC, and social media campaigns for optimal reach. By focusing on measurable outcomes and continuous optimization, we help you achieve sustained business growth and a competitive edge in the market.</p>

              </div>
              <div className="imgGallery col-lg-4">
                <img src={Images.article1} alt="ui/ux" className='img-fluid rounded-1 mb-3' />
              </div>
            </div>
            <div className="cardsServices py-4">
              <h2>Services We Offer</h2>
              <div className="row gy-4">
                {digitalMData.map((dmdata, index) => (
                  <div key={index} className="col-lg-4 d-flex">
                    <div className="service_Item position-relative aboutServicesBoth">
                      <div className="icon mb-2">
                        <FontAwesomeIcon icon={dmdata.dmIcon} />
                      </div>
                      <h4 className="fw-bold mb-3">
                        <a href="#/" className="stretched-link">
                          {dmdata.dmTitle}
                        </a>
                      </h4>
                      <p className="text-dark fw-light">{dmdata.dmDescription}</p>
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

export default Digital