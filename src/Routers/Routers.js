import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ContactPage from '../pages/ContactPage/ContactPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';


function Routers() {

    return(

        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
    );
};

export default Routers;