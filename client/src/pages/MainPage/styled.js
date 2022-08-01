import styled from 'styled-components'

export const MainSection = styled.section`
    width : 100%;
    height: 81.25rem;
    display: flex;
    flex-direction: column;
    
`

export const SubjectWrap = styled.div`
    width : 100%;
    height : 14.375rem;
    display : flex;
    justify-content: center;
    align-items: center;
`

export const Subject = styled.div`
    font-size : 4.375rem;
    font-weight: bold;
`

export const BoardWrap = styled.div`
    width : 100%;
    height : 59.375rem;
    display : flex;
    justify-content: center;
    align-items: center;
`

export const Board = styled.div`
    width : 65.625rem;
    height : 46.375rem;
`

export const ContentTitle = styled.div`
    width : 100%;
    height : 4.0625rem;
    display : flex;
    justify-content:space-between;
    align-items:center;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    & > span{
        color : #909090;
        text-align : center;
        width  : 5.625rem;
        font-size :1.5625rem;
        font-weight: 650;
        font-family: 'Open Sans', sans-serif;
    }
`
