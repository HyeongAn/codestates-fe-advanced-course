import styled from 'styled-components';

export const CommentSection = styled.section`
    width : 90%;
    @media (min-width : 760px){
        height : 59.9375rem;
    }
    
`

export const CommentTitle = styled.div`
    width : 100%;
    height : 5rem;
    display : flex;
    align-items : center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.4);
    & > h2{
        font-size : 1.875rem;
        font-weight:700;
        font-family: 'Open Sans', sans-serif;
    }
    
`

export const CommentWrap = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    width : 100%;
    padding-top : 2rem;

    @media (min-width : 760px){
        height : 49.375rem;
    }
`

export const Comment = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 11rem;
    padding-bottom: 0.625rem;
    
    @media (min-width : 760px){
        height : 9.375rem;
    }
`

export const CommentPIC = styled.div`
    display : flex;
    width : 100%;
    & > img{
        width : 3.125rem;
        height : 3.125rem;
    }
`

export const CommentName = styled.div`
    font-family: 'Open Sans', sans-serif;

    & > p{
        line-height : 1.4375rem;
        font-size : 1.25rem;
        font-weight : 700;
        @media (min-width : 760px){
            height : 1.875rem;
            line-height : 1.875rem;
        }  
    }

    & > span{
        display : inline-block;
        height : 1.25rem;
        line-height : 1.25rem;
        color : #BDBDBD;
        font-size : 0.9375rem;
    }
`

export const CommentBodyWrap = styled.div`
    width :100%;
    
`
export const CommentBody = styled.div`
    display : flex;
    align-items : center;
    width : 85%;
    height : 6rem;
    padding-left : 0.615625rem;
    font-size : 0.9375rem;
    line-height : 1.25rem;
    border-left: 5px solid #E8E8E8;
    font-family: 'Open Sans', sans-serif;
    margin-left: 3.125rem;

`