import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
white-space: nowrap;

background: ${({ primary }) => (primary ? '#CCE0A9' : '#fff')};
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#fff' : '#CCE0A9')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

outline:none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #EC9162;
    /* color: ${({ primary }) => (primary ? '#EC9162' : '#EC9162')}; */

}
`