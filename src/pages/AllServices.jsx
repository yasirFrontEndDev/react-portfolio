import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import ServicesContent from '../components/AllServices/ServicesContent'
const ReduxTool = () => {
  return (
    <section className='about_Section py-5' id='about'>
    <div className="container pb-4">
        <h2 className='text-uppercase text-center'>All Services</h2>

<div className="py-5 px-2">
  <div className="nav nav-pills justify-content-center me-3 services_Navpills py-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><span>UI/UX Design</span> <FontAwesomeIcon icon={faCaretRight} /></button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span>WEB DEVELOPMENT</span> <FontAwesomeIcon icon={faCaretRight} /></button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span>WORDPRESS / SHOPIFY</span> <FontAwesomeIcon icon={faCaretRight}/> </button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span>DIGITAL MARKETING</span> <FontAwesomeIcon icon={faCaretRight} /></button>
  </div>
  <ServicesContent />
</div>
    </div>

</section>
  
  )
}

export default ReduxTool