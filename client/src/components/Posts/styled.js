import styled, { keyframes }from 'styled-components'

export const ContentWrap = styled.section`
    width : 100%;
    height : 42.5rem;
    display : flex;
    flex-direction : column;
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

export const Content = styled.div`
    display : flex;
    justify-content :space-between;
    cursor : pointer;
    border-top : 1px solid #D9D9D9;
    &:hover {
        transition: all 0.4s;
        background-color: rgba( 0, 0, 0, 0.05 );
    }

    
`
export const SpanWrap = styled.div `
    width : ${(props) => props.subject === "no" 
                ? "5.625rem" 
                : "54.3425rem"
            };
    height : 4.0625rem;
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
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
`

export const ImageWrap = styled.div`
    width : 100%;
    height : 42.5rem;
    display : flex;
    justify-content:center;
    align-items: center;
    & > img {
        width : 20rem;
        height : 20rem;
        animation : ${floatingAnomation} 2s infinite;
    }
`