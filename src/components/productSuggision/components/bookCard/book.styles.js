import styled from 'styled-components'
import getTheme from '../../../../utils/getTheme'

export const CardEl = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 18px;

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        &-title{
            color: ${getTheme('color', 'textColor')};
            font-size: 25px;
            font-family: sans-serif;
        }
    }

    .book-list{
        
        &__item{
            display: flex;
            align-items: center;
            border-bottom: 1px solid #999;
            padding-block: 18px;

            &--info{
                padding-left: 8px;

                &__title{
                    font-family: 'Roboto', sans-serif;
                    font-size: 15px;
                    color: #111;
                    word-break: break-all;
                    font-weight: 700;
                    margin-bottom: 5px;
                }
                &__desc{
                    color: #777;
                    font-size: 14px;
                    font-weight: normal;
                    font-family: sans-serif;
                }
            }
        }
    }
`