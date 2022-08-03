import styled from 'styled-components'

export const ContentSection = styled.section`
    width : 100%;
    height : 31.5625rem;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    min-width : 500px;
`

export const TitleWrap = styled.div`
    width : 90%;
    height : 8.125rem;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.4);

    @media (min-width : 760px){
        height : 7rem;
    }
    
`

export const Title = styled.h2`
    width : 100%;
    font-size : 1.5625rem;
    font-weight: 700;
    padding-bottom: 0.8rem;
    line-height: 1.75rem;
    font-family: 'Open Sans', sans-serif;

    @media (min-width : 760px){
        font-size : 1.875rem;
        line-height: 2.25rem;
    }

`

export const UserId = styled.span`
    width: 100%;
    font-size : 1.125rem;
    font-family: 'Open Sans', sans-serif;
    
    @media (min-width : 760px){
        font-size : 1.25rem;
    }

`


export const ContentWrap = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    width : 90%;
    height : 25rem;

    @media (min-width : 760px){
        height : 25rem;
    }
`

export const Matter = styled.span`
    width : 100%;
    height : 18.75rem;
    font-size : 1.25rem;
    line-height: 1.4375rem;
    font-family: 'Open Sans', sans-serif;

    @media (min-width : 760px){
        font-size : 1.5625rem;
        line-height: 1.75rem;
    }

`

