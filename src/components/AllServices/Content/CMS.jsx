import React from 'react'
import Images from '../../../assets/images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const CMS = () => {
  const wordPressShopifyData = [
    {
      wpIcon: faCircleCheck,
      wpTitle: ' Custom Theme Development',
      wpDescription: 'Creating themes tailored to your business needs.',
    },
    {
      wpIcon: faCircleCheck,
      wpTitle: 'SEO & Performance Optimization',
      wpDescription: 'Optimized for speed, SEO, and performance.',
    },
    {
      wpIcon: faCircleCheck,
      wpTitle: ' Plugin & App Integration',
      wpDescription: 'Seamless integration of plugins and apps.',
    },
    {
      wpIcon: faCircleCheck,
      wpTitle: ' eCommerce Store Setup',
      wpDescription: 'Complete setup and customization of online stores.',
    },
  ];
  return (
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="uiux_Section">
        <div className="uiux_Content">
          <div className="py-3 uiux_Inner">
            <div className="categories row gy-3">
              <div className="col-lg-8">
                <h2>WordPress & Shopify CMS Development</h2>
                <p>We provide custom CMS development services to build responsive, SEO-friendly websites using WordPress and Shopify, ensuring a seamless user experience and business growth. From theme customization to plugin integration, we enhance the functionality of your site, optimizing it for performance and user engagement. Our CMS solutions are designed to be easy to manage, allowing you to focus on your business while we handle the technical details.</p>

              </div>
              <div className="imgGallery col-lg-4">
                <img src={Images.article1} alt="ui/ux" className='img-fluid rounded-1 mb-3' />
              </div>
            </div>
            <div className="cardsServices py-4">
              <h2>Services We Offer</h2>
              <div className="row gy-4">
                {wordPressShopifyData.map((wpdata, index) => (
                  <div key={index} className="col-lg-4 d-flex">
                    <div className="service_Item position-relative aboutServicesBoth">
                      <div className="icon mb-2">
                        <FontAwesomeIcon icon={wpdata.wpIcon} />
                      </div>
                      <h4 className="fw-bold mb-3">
                        <a href="#/" className="stretched-link">
                          {wpdata.wpTitle}
                        </a>
                      </h4>
                      <p className="text-dark fw-light">{wpdata.wpDescription}</p>
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

export default CMS