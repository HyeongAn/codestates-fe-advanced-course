import styled, { keyframes }from 'styled-components'

export const ContentWrap = styled.section`
    width : 100%;
    display : flex;
    flex-direction : column;
    min-width : 500px;
`
export const Content = styled.div`
    display : flex;
    justify-content :space-between;
    cursor : pointer;
    border-top : 0.5px solid #D9D9D9;
    width : 100%;
    &:hover {
        transition: all 0.4s;
        background-color: rgba( 0, 0, 0, 0.05 );
    }

    
`
export const SpanWrap = styled.div `
    width : ${(props) => props.subject === "no" 
                ? "5.625rem" 
                : "19.5875rem"
            };
    height : 6.875rem;
    display : flex;
    justify-content: ${(props) => props.subject === 'no'
                ? "center"
                : "none"
            };
    padding-left : ${(props) => props.subject === "title"
                ? "2rem"
                : "none"
            };
    align-items: center;
    font-size: 0.9375rem;
    line-height: 1.125rem;
    font-family: 'Open Sans', sans-serif;

    @media (min-width : 760px){
        width : ${(props) => props.subject === "no" 
                ? "5.625rem" 
                : "54.3425rem"
            };
        height : 4.0625rem;
        font-size: 1.25rem;
        line-height: 1.4375rem;
    }
`

const floatingAnomation = keyframes`
    0% {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`

export const ImageWrap = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content:center;
    align-items: center;
    & > img {
        width : 20rem;
        height : 20rem;
        animation : ${floatingAnomation} 2s infinite;
    }

    & > span {
        font-size : 3rem;
        font-weight: 700;
        font-family: 'Open Sans', sans-serif;

    }
`