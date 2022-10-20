import {AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function getRate(rate) {
    let output = []

    for(let i = 0; i < 5; i++){
        if(i < rate) {
            output.push(AiFillStar)
        } else {
            output.push(AiOutlineStar)
        }
    }
    return output
}
