import { CardEl } from './products.card.styles'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {MdOutlineRateReview} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'

import {useDispatch} from 'react-redux'
import {addOrRemoveFavourite, addCart} from '../../../../features/products/productsSlice'

import getRate from '../../../../utils/getRate'

export default function Card({id, img, title, rate, reviews, price, perMonth, favourite}) {
  
  const dispatch = useDispatch()

  const favouriteHandler = () => {
    dispatch(addOrRemoveFavourite(id))
  }

  const addProduct = () => {
    dispatch(addCart(id))
  }


  return (
    <CardEl>
        <div className="card-img">
          <img src={img} alt={title} width='160px' />
        </div>
        <h4 className="title">{title}</h4>
        <div className='rate'>
            <div className="stars">
              {
                getRate(rate).map((Star, key) => (
                  <Star key={key} />
                ))
              }
            </div>
            <div className="review">
                <MdOutlineRateReview />
                <span>{reviews} отзывов</span>
            </div>
        </div>
        <h4 className="price">{price} сум</h4>
        <h5 className="per-month">{perMonth}</h5>
        <div className="actions">
            <button className="pay">Рассрочка</button>
            <button className="pay-click">Купить в 1 клик</button>
        </div>
        <div className="cart-icon icon" onClick={addProduct}>
          <BsFillCartFill />
        </div>
        <div className="heart-icon icon" onClick={favouriteHandler}>
          {favourite ? <AiFillHeart />:<AiOutlineHeart />}
        </div>
    </CardEl>
  )
}
