import styled from 'styled-components'

export const FooterSection = styled.footer`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 100%;
    height : 15.625rem;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.18);
    min-width : 500px;
`

export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    width  : 78.3rem;
    height : 7.625rem;
`

export const ImgWrapper = styled.div`
    width : 8rem;
    height : 1.9rem;
    padding-left : 2.56rem;
    cursor : pointer;

    & > img{
        width : 100%;
        height : 100%;
    }
`

export const Copyrights = styled.div`
    padding-left : 2.56rem;
    padding-top : 1.375rem;
    font-size: 0.8rem;
    line-height : 1.125rem;
`

export const LinkWrap = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    padding-top : 1rem;
    font-weight: 700;
    font-size: 0.8rem;
    
    @media (min-width : 760px){
        align-items: center;
        flex-direction : row;
        justify-content : space-between;
    }

    & > span{
        padding : 0.8rem 0 0 2.56rem;

        @media (min-width : 760px){
            padding-right : 2.56rem;
        }
    }
`

export const MylinkWrap = styled.div`
    padding-left : 2.06rem;
    display : flex;
    align-items: center;
    & > div{
        padding : 0 0.5rem;
    }
    
`

export const MyLink = styled.a`
    padding: 0 0.5rem;
    border-right : ${(props) => 
        props.border === 'right' ? "1.5px solid" : "none" 
    };
    cursor : pointer;
`