import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {GiLotus} from 'react-icons/gi'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    margin-top: -80px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
        
}
`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
color: #CCE0A9;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cusor: pointer;
    color: #CCE0A9;
    
}
`


export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px) {
    display: none;
}
`

export const NavItem = styled.li`
height:80px;
`

export const NavLinks = styled(LinkS)`
color: #CCE0A9;
display: flex;
align-items: center;
text-decoration: none;
text-transform: uppercase;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #EC9162;
}
`


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px){
display    :none ;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background: #CCE0A9;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline:none;
border: none;
text-transform: uppercase;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    color: #EC9162;
    
}
`

export const Icon = styled(GiLotus)`
color: #CCE0A9;
`
