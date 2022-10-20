import styled from 'styled-components'
import getTheme from '../../../utils/getTheme'

export const HeaderTopEl = styled.div`
    padding-block: 17px;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    .header-top__group{
        display: flex;
        align-items: center;
        justify-content: space-between;

        &--search{
            flex: 1;
            margin-inline: 15px;
            form{
                display: flex;
                height: 40px;
                background-color: ${getTheme('color', 'blue')};
                border-radius: 10px;
                overflow: hidden;
                input{
                    border: 2px solid ${getTheme('color', 'blue')};
                    flex: 1;
                    height: 100%;
                    border-radius: 10px;
                    padding-inline: 15px;
                    color: ${getTheme('color', 'blue')}
                }
                .serach-btn{
                    padding-inline: 1rem;
                    color: #fff;
                    font-size: 17px;
                }
            }
        }
        &--list{
            display: flex;
            align-items: center;            
        }
    }
`