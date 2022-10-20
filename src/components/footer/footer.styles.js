import styled from 'styled-components'
import getTheme from '../../utils/getTheme'

export const FooterEl = styled.footer`
    background-color: ${getTheme('color', 'blue')};
    padding-block: 25px;

    .feature-list{
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 35px;
        border-radius: 20px;
        justify-content: space-around;
        column-gap: 2rem;
        
        &__item{
            &--title{
                font-family: sans-serif;
                font-size: 18px;
                color: ${getTheme('color', 'textColor')};
                font-weight: 700;
            }

            &--desc{
                font-family: 'Roboto', sans-serif;
                font-size: 15px;
                color: #777;
            }
        }
    }

    .information{
        display: grid;
        grid-template-columns: repeat(3fr);
    }
`