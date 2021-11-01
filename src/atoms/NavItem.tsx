import React from 'react';
import styled from 'styled-components';
import Colours from '../styles/Colours';

const RightItem = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    a {
        display: block;
        margin-top: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;
        width: 100%;
        text-decoration: none;
        font-family: 'Ariel', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        text-align: left;
        line-height: 1.2rem;
        padding-left: 5px;
        color: ${Colours.secondary};
        border-radius: 10px 0px 0px 10px;
        height: 1.5rem;
        white-space: nowrap;
        border: 3px solid ${Colours.primary};
        margin-left: 15%;
    }


    a:hover {
        background-color: ${Colours.primary};
        color: white;
        width: 100%;
        margin-left: 0%;
        transition: 
            background-color 300ms linear,
            color 500ms linear,
            width 300ms linear,
            margin-left 300ms linear;
    }
`;

const LeftItem = styled.div`
    width: 100%;
    a {
        display: block;
        margin-top: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;
        width: 85%;
        text-decoration: none;
        font-family: 'Ariel', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        text-align: right;
        line-height: 1.2rem;
        padding-right: 5px;
        color: ${Colours.secondary};
        border-radius: 0px 10px 10px 0px;
        height: 1.5rem;
        white-space: nowrap;
        border: 3px solid ${Colours.primary};
    }

    a:hover {
        background-color: ${Colours.primary};
        color: white;
        width: 100%;
        transition: 
            background-color 300ms linear,
            color 500ms linear,
            width 300ms linear;
    }
`;

interface NavItemProps {
    text: string,
    side: "left" | "right"
}

const NavItem: React.FC<NavItemProps> = ({text, side}) => {
    return side === "left" ?
        <LeftItem><a href="#">{text}</a></LeftItem>
        : <RightItem><a href="#">{text}</a></RightItem>
}

export default NavItem;