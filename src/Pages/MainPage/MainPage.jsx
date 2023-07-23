import React from 'react';
import { useSelector } from 'react-redux';
import MobilePreview from '../../Components/MobilePreview/MobilePreview';
import ProfileDetails from '../../Components/ProfileDetails/ProfileDetails';
import AddLinks from '../../Components/AddLinks/AddLinks';
import './MainPage.css';

export default function MainPage() {
    const mainPageContent = useSelector(state => state.mainPageContent);
    return (
        <div id='main-page'>
            <MobilePreview />
            {
                mainPageContent === 'PROFILE_DETAILS' ? <ProfileDetails /> : <AddLinks />
            }
        </div>
    )
}
