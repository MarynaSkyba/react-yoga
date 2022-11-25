import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {GiLotus} from 'react-icons/gi';



export const FooterComponent = styled.footer`
background-color: #EEF7E2;
`



export const FooterContainer = styled.div`
padding:48px 24px;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 0 auto;



@media screen and (max-width: 768px){
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 32px;

     
}
`

export const FooterMenu = styled.div`
display:flex;
flex-direction:column;
/* align-items: flex-start; */
margin: 16px;
text-align: left;
/* width: 160px; */
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px ){
    margin: 0;
    padding: 10px;
    width: 100%;
    
}
`

// export const FooterTitle = styled.h3`
// align-content: center;
// font-size:14px;
// margin-bottom:16px;
// color: #EC9162;`

export const FooterLink = styled(Link)`
color: black;
text-decoration:none;
margin-bottom:0.5rem;
font-size: 14px;
text-align: center;

&:hover {
    color: #EC9162;
}`


export const LogoContainer = styled.div`
display: flex;
justify-content: center;
`

export const Logo = styled.p`
color: #CCE0A9;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
/* margin-left: 24px; */
font-weight: bold;
text-decoration: none;
`



export const Icon = styled(GiLotus)`
color: #CCE0A9;
`

export const IconContainer = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
    justify-content: center;
}
`


export const IconWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px;

`



