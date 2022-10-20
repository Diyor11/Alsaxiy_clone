import styled from 'styled-components'
import getTheme from '../../../utils/getTheme'

export const HeaderBottomEl = styled.div`
    padding-block: 17px;

    .header-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__link{
            font-family: sans-serif;
            font-size: 15px;
            font-weight: 600;
            color: #333;
            line-height: 19px;
            transition: color .2s ease;

            &:hover{
                color: ${getTheme('color', 'blue')}
            }
        }

        >.open-menu{
            display: flex;
            align-items: center;

            .menu-icon{
                height: 1.5rem;
                width: 1.5rem;
                margin-right: 6px;
                
                >path{
                    stroke: ${getTheme('color', 'blue')};
                }
            }
        }
    }
`