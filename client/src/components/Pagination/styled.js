import styled from 'styled-components'

export const PageSection  = styled.section`
    width : 100%;
    height : 7.5rem;
`

export const ButtonWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

export const Button = styled.button`
    font-size: 1.25rem;
    color : rgba( 0, 0, 0, 0.4 );;
    width : 2.5rem;
    height: 2.5rem;
    border-left: ${(props) => props.border === "true" ? "1px solid rgba(0, 0, 0, 0.4)" : "none" };
    &[aria-current]{
        background: rgba(234, 234, 234, 0.4);
    }
`