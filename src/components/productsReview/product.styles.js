import styled from 'styled-components'
import getTheme from '../../utils/getTheme'

export const ProductsEl = styled.div`
    .title{
        margin-bottom: 15px;
        color: ${getTheme('color', 'textColor')};
        font-family: sans-serif;
        font-size: 18px;
    }
`