import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './LinkInput.css';

export default function LinkInput({ id }) {
    const dispatch = useDispatch();
    useCallback()
    const selectPlatformHandler = (e) => {
        dispatch({ type: 'CHANGE_LINK_PLATFORM', payload: { id, value: e.target.value } });
    };
    const urlInputHandler = (e) => {
        dispatch({ type: 'CHANGE_LINK_URL', payload: { id, value: e.target.value } });
    };
    const removeLinkHandler = () => {
        dispatch({ type: 'REMOVE_LINK', payload: id });
    };

    return (
        <div id='link-input'>
            <div id='link-input-header'>
                <span> =Link #1</span>
                <button onClick={removeLinkHandler}>Remove</button>
            </div>
            <div id='link-input-wrapper'>
                <label>Platform</label>
                <select id='platform-select' onChange={selectPlatformHandler}>
                    <option value="GITHUB">GitHub</option>
                    <option value="YOUTUBE">YouTube</option>
                    <option value="LINKEDIN">Linkedin</option>
                    <option value="STACK">StackOverflow</option>
                </select>
                <label>Link</label>
                <input
                    type="text"
                    id='input-link'
                    placeholder='copy your link here'
                    onChange={urlInputHandler}
                />
            </div>
        </div>
    )
};
