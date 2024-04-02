import styled, {css} from "styled-components"

export const Title = styled.h1 `
font-size:3rem;
font-weight:700;
${props => props.theme == "dark" && css `
background: green;
    &:hover{
        background: blue;
    }
`}
`
