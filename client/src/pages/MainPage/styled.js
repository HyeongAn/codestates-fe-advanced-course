import styled from 'styled-components'

export const MainSection = styled.section`
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width : 500px;
`

export const SubjectWrap = styled.div`
    width : 100%;
    height : 14.375rem;
    display : flex;
    justify-content: center;
    align-items: center;
`

export const Subject = styled.div`
    font-size : 3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;

    @media (min-width : 760px){
        font-size : 4.375rem;
    }
`

export const BoardWrap = styled.div`
    width : 90%;
    display : flex;
    justify-content: center;
    align-items: center;
`

export const Board = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width : 100%;
    min-width : 500px;
`

export const ContentTitle = styled.div`
    width : 100%;
    height : 4.0625rem;
    display : flex;
    justify-content:space-between;
    align-items:center;

    & > span{
        color : #909090;
        text-align : center;
        width  : 5.625rem;
        font-size :1.125rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        @media (min-width : 760px){
            font-size :1.5625rem;
        }
    }
`
