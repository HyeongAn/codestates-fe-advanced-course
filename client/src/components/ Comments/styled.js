import styled from 'styled-components';

export const CommentSection = styled.section`
    width : 65.625rem;
    height : 59.9375rem;
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
    }
    
`

export const CommentWrap = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height : 49.375rem;
    padding-top : 2rem;
`

export const Comment = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 9.375rem;
    padding-bottom: 0.625rem;
`

export const CommentPIC = styled.div`
    width : 3.75rem;
    height : 8.75rem; 
    display : flex;
    flex-direction : column;
    align-items : center;

    & > img{
        width : 3.125rem;
        height : 3.125rem;
    }
`

export const CommentInfo = styled.div`
    width : 61.875rem;
    height : 7.875rem;
`

export const CommentName = styled.div`
    width : 100%;
    height : 3.125rem;

    & > p{
        height : 1.875rem;
        line-height : 1.875rem;
        font-size : 1.25rem;
        font-weight : 700;
    }

    & > span{
        display : inline-block;
        height : 1.25rem;
        color : #BDBDBD;
        font-size : 0.9375rem;
        line-height : 1.25rem;
    }
`

export const CommentBodyWrap = styled.div`
    display : flex;
    align-items : center;
    width :100%;
    height : 4.375rem;
    padding-top :0.375rem;
    font-size : 0.9375rem;
    line-height : 1.25rem;
    border-left: 5px solid #E8E8E8;
`
export const CommentBody = styled.div`
    width : 98%;
    padding-left : 0.615625rem;

`