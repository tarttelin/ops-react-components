import React, { HtmlHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Logo as LogoIcon } from '../styles/icons';
import { Burger } from '../styles/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Colours from '../styles/Colours';

const NavContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-area: head;
    padding: 
`;

const NavToggle = styled.input`
    display: none;
`;

const NavBar = styled.nav`

    border-bottom: 1px solid black;
    height: 100%;
    padding-bottom: 1px;

    display: grid;
    grid-template-columns: minmax(50px, 60px) minmax(80px, 150px) auto 1fr;

    .burger-menu {
        cursor: pointer;
        grid-column: 1;
        height: 40px;
        width: 40px;
        padding: 4px 8px 0px 8px;
        color: ${Colours.primary};
    }

    .burger-menu:hover {
        align: center;
        background-color: ${Colours.menuDrawerBg};
        border-radius: 25%;
        transition: 
            background-color 300ms linear;
    }

    align-items: center;

`;

const Logo = styled.div`
    grid-column: 2;
    font-size: 1.5rem;
    text-align: left;

    img {
        padding: 0;
        border: 10px;
    }
`;

const UserMenu = styled.div`
    grid-column: 4;
    .user-icon {
        cursor: pointer;
        height: 40px;
        width: 40px;
        color: ${Colours.primary};
    }
    .user-icon:hover {
        filter: brightness(75%);
        transition: filter 300ms linear;
    }
    text-align: right;
`;

interface HeaderProps {
    toggleMainMenu: boolean
    setToggleMainMenu: (toggle:boolean) => void
    toggleUserMenu: boolean
    setToggleUserMenu: (toggle: boolean) => void
}

const Header: React.FC<HeaderProps> = ({toggleMainMenu, setToggleMainMenu, toggleUserMenu, setToggleUserMenu}) => {
    
    return (
        <NavContainer>
            <NavBar>
                <NavToggle type="checkbox" id="menu-toggle" onChange={() => {
                    setToggleMainMenu(!toggleMainMenu);
                    setToggleUserMenu(false);
                }}/>
                <label htmlFor="menu-toggle" className="burger-menu">
                    <Burger width="100%" height="100%"/>
                </label>
                <Logo>
                    <LogoIcon width="100%" height="100%" />
                </Logo>
                
                <UserMenu>
                    <NavToggle type="checkbox" id="user-toggle" onChange={() => {
                        setToggleUserMenu(!toggleUserMenu);
                        setToggleMainMenu(false);
                    }}/>

                    <label htmlFor="user-toggle">
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                    </label>
                </UserMenu>
                
            </NavBar>
        </NavContainer>
    );
}

export default Header;