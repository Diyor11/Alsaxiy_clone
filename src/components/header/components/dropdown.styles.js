import styled from 'styled-components'
import getTheme from '../../../utils/getTheme'

export const DropdownEl = styled.li`
    position: relative;

    .badge{
        position: absolute;
        top: 0;
        right: 10px;
        background-color: ${getTheme('color', 'blue')};
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        
    }

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-inline: 15px;

        &:hover{
            .img, span{
                color: ${getTheme('color', 'blue')}
            }
        }

        .img, span{
            transition: color 0.2s ease;
        }

        .img{
            width: 2rem;
            height: 2rem;
            color: #333;
        }
        span{
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
        }
    }
    
    &:hover> .dropdown-modal{
        transform: scale(1);
    }

    .dropdown-modal{
        transition: transform 0.3s ease;
        transform-origin: top right;
        transform: scale(0);
        position: absolute;
        top: 100%;
        right: 0;
        background: #fff;
        box-shadow: 2px 7px 20px #777;
        border-radius: 15px;
        width: 380px;
        z-index: 99;
        overflow: hidden;
        
        .products{
            padding: 25px 12px;

            &-item{
                display: flex;
                align-items: center;
                border-radius: 10px;
                box-shadow: 2px 3px 7px #888;
                padding: 8px 0;

                &__title{
                    font-family: 'Roboto', sans-serif;
                    font-size: 12px;
                    color: ${getTheme('color', 'blue')};
                    padding-inline: 10px;
                    width: 50%;
                }
                
                &__price{
                    flex-grow: 1;
                    text-align: right;
                    margin-right: 4px;
                    font-size: 14px;
                    font-size: #333;
                    font-family: sans-serif;
                    font-weight : 700;
                }

                &__btn{
                    height: 1.3rem;
                    width: 1.3rem;
                }
            }
        }
        .footer{
            padding: 12px;
            background: rgba(223,241,255,.44);
            
            .calc-price{
                display: flex;
                justify-content: space-between;
                font-family: 'Roboto', sans-serif;
            }

            .buttons{
                margin-top: 25px;

                button{
                    text-transform: uppercase;
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    margin-inline: auto;
                    margin-bottom: 8px;
                    padding: 12px 0;
                    font-size: 16px;
                }
                
                .order{
                    background-color: ${getTheme('color', 'blue')};
                    color: #fff;
                }
            }
        }
    }
`