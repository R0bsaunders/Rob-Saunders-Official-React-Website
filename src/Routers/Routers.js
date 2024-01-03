import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ContactPage from '../pages/ContactPage/ContactPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';
import WebBuildPage from '../pages/WebDevelopment/WebDevelopment';
import {Locations} from './Locations';
import SquarespacePage from '../pages/SquarespacePage/SquarespaceDevelopment';
import RobHowardPage from '../pages/RobertHoward/RobHowardPage';


function Routers() {

    return(

        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/budget-web-design" element={<WebBuildPage />} />
            <Route path="/squarespace-web-designer-uk" element={<SquarespacePage />} />
            {Locations.map(e => <Route key={e} path={`/budget-web-design-${e.toLowerCase()}`} element={<WebBuildPage location={e}/>} /> )}

            {/* The below is an example page for Rob Howard to see Google translate in action */}
            <Route path="/rob-howard-translation-tool" element={<RobHowardPage />} />


        </Routes>
    );
};

export default Routers;