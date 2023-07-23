import React, { useEffect } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { PiYoutubeLogoFill } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import { BsStackOverflow } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import './DisplayedLink.css';

export default function DisplayedLink({ id, platform, url }) {
    const setIcon = () => {
        switch (platform) {
            case 'GITHUB':
                return <TbBrandGithubFilled />;
            case 'YOUTUBE':
                return <PiYoutubeLogoFill />;
            case 'LINKEDIN':
                return <RiLinkedinFill />
            case 'STACK':
                return <BsStackOverflow />
        }
    }
    const setBgColor = () => {
        switch (platform) {
            case 'GITHUB':
                return 'rgb(36, 41, 46)';
            case 'YOUTUBE':
                return 'rgb(255, 0, 0)';
            case 'LINKEDIN':
                return 'rgb(0, 119, 181)';
            case 'STACK':
                return 'rgb(255, 128, 0)';
        }
    };
    return (
        <a id='displayed-link' href={url} style={{ background: setBgColor() }} draggable>
            <div>
                {setIcon()}
                <span>{platform}</span>
            </div>
            <FaArrowRight />
        </a>
    )
}

