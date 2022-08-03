import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderSection = styled.section`
    display : flex;
    align-items: center;
    width : 100%;
    height : 6.25rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.18);
    min-width : 500px;

`

export const ImgWrapper = styled(Link)`
    width : 6.544375em;
    height : 1.5625rem;
    padding-left : 2.5625rem;
    cursor : pointer;

    @media (min-width : 760px){
        width : 8rem;
        height : 1.9rem;
        padding-left : 2.56rem;
    }

    & > img{
        width : 100%;
        height : 100%;
    }
`