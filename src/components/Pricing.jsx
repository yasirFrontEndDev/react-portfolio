import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {

    const pricingPlans = [
        {
            name: 'Free Plan',
            price: 0,
            features: [
                'Quam adipiscing vitae proin.',
                'DQuam adipiscing vitae proinit.',
                'UlQuam adipiscing vitae proino',
            ],
            unavailableFeatures: ['UlQuam adipiscing vitae proino'],
        },
        {
            name: 'Basic Plan',
            price: 9,
            features: [
                'Quam adipiscing vitae proin.',
                'DQuam adipiscing vitae proinit.',
                'UlQuam adipiscing vitae proino',
                'DQuam adipiscing vitae proinit.',
            ],
            unavailableFeatures: [],
        },
        {
            name: 'Premium Plan',
            price: 29,
            features: [
                'Quam adipiscing vitae proin.',
                'DQuam adipiscing vitae proinit.',
                'DQuam adipiscing vitae proinit.',
                'UlQuam adipiscing vitae proino',
            ],
            unavailableFeatures: [],
        },
    ];



    const [selectedPlan, setSelectedPlan] = useState('Free Plan'); // Store selected plan

    const handlePlanSelect = (planName) => {
        console.log(planName, "plans");

        setSelectedPlan(planName); // Update selected plan
    };


    return (
        <section className='pricing_Secton py-5' id='pricing'>
            <div className="container sectionTitle">
                <h2>pricing</h2>
                <p className='text-dark fw-light'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="container pricingContainer">
                <div className="row gy-4">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="col-lg-4">
                            <div
                                className={`pricingItem ${selectedPlan === plan.name ? 'selectedPlanClass' : ''}`} // Add class if selected
                            >
                                <h3>{plan.name}</h3>
                                <h4>
                                    <sup>$</sup>
                                    {plan.price}
                                    <span> / month</span>
                                </h4>
                                <ul className="pricingUl">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <FontAwesomeIcon icon={faCheck} /> <span>{feature}</span>
                                        </li>
                                    ))}
                                    {plan.unavailableFeatures.map((feature, i) => (
                                        <li key={i} className="na">
                                            <FontAwesomeIcon icon={faXmark} /> <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#/"
                                    className={`buyNowBtn ${selectedPlan === plan.name ? 'selectedPlanBtn' : ''}`}
                                    onClick={() => handlePlanSelect(plan.name)} // Select the plan on click
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Pricing