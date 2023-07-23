import React from 'react';
import { useSelector } from 'react-redux';
import DisplayedLink from '../DisplayedLink/DisplayedLink';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import './MobilePreview.css';

export default function MobilePreview() {
    const profileDetails = useSelector(state => state.profileDetails);
    const links = useSelector(state => state.links);
    return (
        <div id='left-side'>
            <div id='mobile-template'>
                <div id='mobile-template-top'>
                </div>
                <div id='avatar'>
                    {
                        profileDetails.img ?
                            (<Avatar alt="Remy Sharp" src={profileDetails.img} sx={{ width: 120, height: 120 }} />) :
                            (
                                <Skeleton
                                    animation="wave"
                                    variant="circular"
                                    width={120}
                                    height={120} />
                            )
                    }

                </div>
                <div id='name'>
                    {
                        profileDetails.firstName && profileDetails.lastName ?
                            (<h2>{profileDetails.firstName} {profileDetails.lastName}</h2>) :
                            (<Skeleton
                                animation="wave"
                                height={30}
                                width={100}
                            />)
                    }
                </div>
                <div id='email'>
                    {
                        profileDetails.email ?
                            (<h5>{profileDetails.email}</h5>) :
                            (<Skeleton
                                animation="wave"
                                height={20}
                                width={140}
                            />)
                    }

                </div>
                <div id="mobile-view-links">
                    {
                        links.reverse().map(link => (
                            <DisplayedLink key={link.id} {...link} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
