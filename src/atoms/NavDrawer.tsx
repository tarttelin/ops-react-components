import React from 'react';
import styled from 'styled-components';
import Colours from '../styles/Colours';


interface DrawerProps {
    width: string
}


const LeftNavDrawer = styled.aside<DrawerProps>`

grid-area: 2 / 1 / 3 / 2; 
z-index: 10;
background-color: ${Colours.menuDrawerBg};
transition: width 300ms ease-in-out;
overflow: hidden;
width: ${p => p.width};
`;

const RightNavDrawer = styled.aside<DrawerProps>`

grid-area: 2 / 3 / 3 / 4;
z-index: 10;
display: flex;
align-items: flex-end;
flex-direction: column;
height: 100%;
width: ${props => props.width};
transition-delay: ${props => props.width === "0px" ? "550ms" : "0ms"};

span {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    background-color: ${Colours.menuDrawerBg};
    transition: width 300ms ease-out;
    list-style: none;
    white-space: nowrap;
    padding: 0;
    width: ${props => props.width};
}
`;


interface NavDrawerProps {
    side: "right" | "left"
    isOpen: boolean
}

const NavDrawer: React.FC<NavDrawerProps> = ({side, isOpen, children}) => {
    if (side === 'left') {
        return <LeftNavDrawer width={isOpen ? "100%"  : "0px"}>
            <span>
                {children}
            </span>
        </LeftNavDrawer>
    } else {
        return <RightNavDrawer width={isOpen ? "100%"  : "0px"}>
            <span>
                {children}
            </span>
        </RightNavDrawer>
    }
}

export default NavDrawer;