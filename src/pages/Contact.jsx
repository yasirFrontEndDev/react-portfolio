import React from 'react'
import Images from '../assets/images/Images';

const Contact = () => {
    return (
        <div className="contact_Section">
            <div className="container">
            <div className='row m-0 contact_Row py-4'>
                <div className="col-lg-5 contact_Col">
                    <div className="aLtrion_Contact_Form">
                      <div className="row">
                        <div className="col-12">
                        <h2 className="form-title text-white">
                            Get In Touch
                        </h2>
                        <p className='text-white'>Our friendly team would love to hear from you!</p>
                            <form action="#/">
                            <p>
                                <input type="text" className='form-control' placeholder='Enter Name' />
                            </p>
                            <p>
                                <input type="text" className='form-control' placeholder='Enter Email' />
                            </p>
                            <p>
                                <input type="text" className='form-control' placeholder='Enter Phone' />
                            </p>
                            <p>
                                <input type="text" className='form-control' placeholder='Enter City (Optional)' />
                            </p>
                            <p>
                                <textarea placeholder='Message or query' className='form-control'></textarea>
                            </p>
                            <p className='subsEmail'>
                            <a href='#/' className='submitSubBtn rounded-2 w-100'>Send Message</a>
                            </p>
                            </form>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className='w-100 my-2'><iframe width="100%" height="450" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=The%20Dot%20Networks+(iDAaRA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;