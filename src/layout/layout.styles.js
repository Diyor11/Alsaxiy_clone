import styled from 'styled-components'
import getTheme from '../utils/getTheme'

export const MainEl = styled.main`
    background-color: ${getTheme('color', 'mainBg')};
    padding-block: 30px;
`