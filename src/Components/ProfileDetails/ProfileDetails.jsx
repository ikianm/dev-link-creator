import React, { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import './ProfileDetails.css';

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_IMG':
            return { ...state, img: action.payload };
        case 'SET_FIRST_NAME':
            return { ...state, firstName: action.payload };
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};
export default function ProfileDetails() {
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [details, dispatchDetails] = useReducer(reducer, { img: '', firstName: '', lastName: '', email: '' });
    const dispatch = useDispatch();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            dispatchDetails({ type: 'SET_IMG', payload: reader.result })
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const setProfileDetails = () => { //set all details except the img
        dispatch({ type: 'SET_PROFILE_DETAILS', payload: details });
        setIsShowAlert(true);
        setTimeout(() => setIsShowAlert(false), 3000);
    };
    return (
        <div id='right-side'>
            <div id='right-side-header'>
                <h2>Profile Details</h2>
                <p>Add your details to create a personal touch to your profile.</p>
            </div>
            <div id='right-side-form'>
                <div id='img-input' className='inputs'>
                    <label>Profile picture</label>
                    <div id='img-input-wrapper'>
                        <h3>Change Image</h3>
                        <input type="file" onChange={handleImageChange} />
                    </div>
                </div>
                <div id='fname-input' className='inputs'>
                    <label>First name</label>
                    <input type="text" id='input-fname' onChange={(e) => dispatchDetails({ type: 'SET_FIRST_NAME', payload: e.target.value })} />
                </div>
                <div id='lname-input' className='inputs'>
                    <label>Last name</label>
                    <input type="text" id='input-lname' onChange={(e) => dispatchDetails({ type: 'SET_LAST_NAME', payload: e.target.value })} />
                </div>
                <div id='email-input' className='inputs'>
                    <label>Email</label>
                    <input type="text" id='input-email' onChange={(e) => dispatchDetails({ type: 'SET_EMAIL', payload: e.target.value })} />
                </div>
                {isShowAlert ? <Alert variant="outlined" severity="success">Profile Details have been updated!</Alert> : null}
            </div>
            <button id='save-button' onClick={setProfileDetails}>Save</button>
        </div>
    )
}
