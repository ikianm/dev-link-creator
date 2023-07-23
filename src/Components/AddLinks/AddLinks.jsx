import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinkInput from '../../Components/LinkInput/LinkInput';
import './AddLinks.css';

export default function AddLinks() {
    const links = useSelector(state => state.links);
    const dispatch = useDispatch();
    const addLinkHandler = () => {
        dispatch({ type: 'CREATE_FORM' });
    };


    return (
        <div id='right-side'>
            <div id='right-side-header'>
                <h2>Customize your links</h2>
                <p>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <button id='add-link-button' onClick={addLinkHandler}>+ Add new link</button>
            <div id='links-wrapper'>
                {
                    links.map(link => (
                        <LinkInput key={link.id} id={link.id} />
                    ))
                }
            </div>
        </div>
    )
}
