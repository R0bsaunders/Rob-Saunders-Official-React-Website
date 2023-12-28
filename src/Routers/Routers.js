import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ContactPage from '../pages/ContactPage/ContactPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';
import WebBuildPage from '../pages/WebDevelopment/WebDevelopment';


function Routers() {

    return(

        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/budget-web-design" element={<WebBuildPage />} />
            <Route path="/budget-web-design-bristol" element={<WebBuildPage location="Bristol"/>} />
            <Route path="/budget-web-design-taunton" element={<WebBuildPage location="Taunton"/>} />
            <Route path="/budget-web-design-exeter" element={<WebBuildPage location="Exeter"/>} />
            <Route path="/budget-web-design-plymouth" element={<WebBuildPage location="Plymouth"/>} />
            <Route path="/budget-web-design-devon" element={<WebBuildPage location="Devon"/>} />
            <Route path="/budget-web-design-cornwall" element={<WebBuildPage location="Cornwall"/>} />
            <Route path="/budget-web-design-somerset" element={<WebBuildPage location="Somerset"/>} />
            <Route path="/budget-web-design-chard" element={<WebBuildPage location="Chard"/>} />
            <Route path="/budget-web-design-truro" element={<WebBuildPage location="Truro"/>} />
            <Route path="/budget-web-design-barnstaple" element={<WebBuildPage location="Barnstaple"/>} />
            <Route path="/budget-web-design-ilminster" element={<WebBuildPage location="Ilminster"/>} />
            <Route path="/budget-web-design-axminster" element={<WebBuildPage location="Axminster"/>} />

        </Routes>
    );
};

export default Routers;