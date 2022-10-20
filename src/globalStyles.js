import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: unset;
    }
    button, input{
        outline: none;
    }
    button{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }
`

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
        max-width: 1392px;
    }
    @media (min-width: 992px) {
        max-width: 1140px;
    }
    @media (min-width: 768px) {
        max-width: 960px;
    }
    @media (min-width: 576px) {
        max-width: 720px;
    }
`