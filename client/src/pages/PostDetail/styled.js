import styled from 'styled-components'

export const DetialSection = styled.section`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    width : 100%;
    height : ${(props)=> 
        props.loading === "true" ? "42.5rem" : "96.75rem"};
    min-width : 500px;

    @media (min-width : 760px){
        height : ${(props)=> 
            props.loading === "true" ? "42.5rem" : "96.75rem"};
    }
`