import { Container } from '../../../globalStyles'
import { HeaderTopEl } from './header.top.styles'

import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/icons/Logo'
// --------- Icons ---------
import { MdPayment} from 'react-icons/md'
import { TbTruck, TbWorld} from 'react-icons/tb'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import Dropdown from '../components/Dropdown'

import { useSelector, useDispatch } from 'react-redux'
import {removeCart} from '../../../features/products/productsSlice'
import { useMemo } from 'react'

const navItems = [
  {
    Img: MdPayment,
    url: '/order-pay',
    title: 'Оплатить'
  },
  {
    Img: TbTruck,
    url: '/order-status',
    title: 'Отследить'
  },
  {
    Img: TbWorld,
    url: '/order-status',
    title: 'Отследить.',
  },
  {
    Img: AiOutlineShoppingCart,
    url: '#',
    title: 'Корзинка',
    dropdown: true
  },
  {
    Img: AiOutlineHeart,
    url: '/favourites',
    title: 'Избранное',
    favourite: true
  },
  {
    Img: AiOutlineUser,
    url: 'order-status',
    title: 'Кабинет'
  },
]

export default function HeaderTop() {

  const {cartProducts} = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const removeProduct = (id) => {
    dispatch(removeCart(id))
  }

  const tototalPrice = useMemo(() => {
      if(cartProducts){
        let output = 0
        cartProducts.forEach(p => {
          output+= p.price
        })
        return output
      } else {
        return 0
      }
    }, [cartProducts])



  return (
    <HeaderTopEl>
      <Container>
        <div className="header-top__group">
          <NavLink to='/' className='header-top__group--logo'>
            <Logo />
          </NavLink>
          <div className="header-top__group--search">
            <form onSubmit={handleSubmit}>
              <input type="text" name="search" className='search-input' placeholder='Поиск...' />
              <button className="serach-btn">Искать</button>
            </form>
          </div>
          <ul className="header-top__group--list">
            {navItems.map(({Img, url, title, dropdown }, key) => {
              return dropdown ? (
                <Dropdown key={title} className='list-item' badge={'5'}>
                  <div className="badge">{cartProducts ? cartProducts.length:0}</div>
                    <NavLink to={url}>
                      <Img className='img' />
                      <span>{title}</span>
                    </NavLink>
                  <div className="dropdown-modal">
                    <div className="products">
                      {cartProducts?.map(product => (
                        <div key={product.id} className="products-item">
                          <img width={40} className="products-item__img" alt='droduct' src={product.img} />
                          <h5 className="products-item__title">{product.title}</h5>
                          <div className="products-item__price">{product.price} sum</div>
                          <IoMdClose onClick={() => removeProduct(product.id)} className="products-item__btn"/>
                      </div>
                      ))}
                      
                    </div>
                    <div className="footer">
                      <div className="calc-price">
                        <span>sum</span>
                        <strong>{tototalPrice}</strong>
                      </div>
                      <div className="buttons">
                        <button className='order'>оформить покупку</button>
                        <button className='go-to'>перейти в корзинку</button>
                      </div>
                    </div>
                  </div>
                </Dropdown>
              ) : (
                <Dropdown className='list-item' key={title}>
                  <NavLink to={url}>
                    <Img className='img' />
                    <span>{title}</span>
                  </NavLink>
                </Dropdown>
              )
            })}
          </ul>
        </div>
      </Container>
    </HeaderTopEl>
  )
}
