import styled from 'styled-components'
import getTheme from '../../../../utils/getTheme'

export const CardEl = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 8px 18px;
    position: relative;
    
    .card-img{
        margin-inline: auto;
        
        width: fit-content;
        margin-inline: auto;
        
        img{
            max-height: 160px;
        }
    }

    .title{
        margin-top: 12px;
        color: #141821;
        font-size: 14px;
        transition: color 0.2s ease;
        text-overflow: ellipsis;
        font-family: 'Roboto', sans-serif;

        &:hover{
            color: ${getTheme('color', 'blue')}
        }
    }

    .rate{
        display: flex;
        margin-top: 8px;

        .stars{
            margin-right: 7px;
        }

        .review{
            display: flex;
            align-items: center;

            svg{
                margin-right: 5px;
            }
        }
    }

    .price{
        margin-top: 18px;
        font-family: sans-serif;
        font-size: 20px;
        color: ${getTheme('color', 'textColor')}
    }

    .per-month{
        color: #444;
        font-family: sans-serif;
        margin-top: 8px;
    }

    .actions{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            padding: 8px 4px;
            color: #fff;
            border-radius: 7px;
            font-size: 13px;
            margin-inline: 4px;
        }

        .pay{
            background-color: #00cd98;
        }
        .pay-click{
            background-color: ${getTheme('color', 'blue')};
        }
    }

    .icon{
        position: absolute;
        right: 10px;
        padding: 3px;
        cursor: pointer;
    }
    
    .cart-icon{
        background-color: ${getTheme('color', 'blue')};
        top: 20px;
        border-radius: 3px;
        color: #fff;
        font-size: 1rem;
        right: 14px;
    }
    .heart-icon{
        font-size: 1.5rem;
        top: 50px;
        color: #444;
    }
`