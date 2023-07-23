import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import './Topbar.css';

export default function Topbar() {
    const mainPageContent = useSelector(state => state.mainPageContent);
    const dispatch = useDispatch();
    const switchPageHandler = (action) => { //dispatches to store to change the current content of the main page
        dispatch({ type: action });
    };

    return (
        <div id='topbar'>
            <div id='topbar-logo'>
                <span><FaLink id='link-logo' /></span>
                <h2>DevLinks</h2>
            </div>
            <div id='topbar-navigate-links'>
                <button
                    className={mainPageContent === 'LINKS' ? 'topbar-links active' : 'topbar-links'} //highlights the active content
                    onClick={() => switchPageHandler('TO_LINKS')}
                >
                    <BsLink45Deg className='navigate-logos'
                    /> Links
                </button>
                <button
                    className={mainPageContent === 'LINKS' ? 'topbar-links' : 'topbar-links active'} //highlights the active content
                    onClick={() => switchPageHandler('TO_PROFILE')}
                >
                    <CgProfile className='navigate-logos' /> Profile Details
                </button>
            </div>
            <Link to='/preview' id='topbar-preview-button'>Preview</Link>
        </div>
    )
};
