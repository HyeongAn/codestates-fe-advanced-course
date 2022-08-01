import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderSection = styled.section`
    display : flex;
    align-items: center;
    width : 100%;
    height : 6.25rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.18);

`

export const ImgWrapper = styled(Link)`
    width : 8rem;
    height : 1.9rem;
    padding-left : 2.56rem;
    cursor : pointer;

    & > img{
        width : 100%;
        height : 100%;
    }
`