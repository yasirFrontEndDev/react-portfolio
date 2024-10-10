import React from 'react'
import WebDev from './Content/WebDev'
import UIUX from './Content/UIUX'
import CMS from './Content/CMS'
import Digital from './Content/Digital'

const ServicesContent = () => {
    return (
        <div className="tab-content" id="v-pills-tabContent">
            <UIUX />
            <WebDev/>
            <CMS />
            <Digital />
        </div>
    )
}

export default ServicesContent