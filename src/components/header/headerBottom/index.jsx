import { HeaderBottomEl } from "./header.bottom.styles"
import {Container} from '../../../globalStyles'
import { NavLink } from "react-router-dom"

import {GrMenu} from 'react-icons/gr'

const navItems = [
  {
    url: '/',
    titel: 'Новости'
  },
  {
    url: '/',
    titel: 'Новинки'
  },
  {
    url: '/',
    titel: 'Скидки'
  },
  {
    url: '/',
    titel: 'Книги'
  },
  {
    url: '/',
    titel: 'Мебель'
  },
  {
    url: '/',
    titel: 'Телефоны и гаджеты'
  },
  {
    url: '/',
    titel: 'Кондиционеры'
  },

]

export default function HeaderBottom() {
  return (
    <HeaderBottomEl>
      <Container>
        <nav className="header-nav">
          <NavLink to='/' className='header-nav__link open-menu'>
            <GrMenu className="menu-icon" />
            <span>Все категории</span>
          </NavLink>
          {
            navItems.map(({url, titel}, key) => (
              <NavLink key={key} className='header-nav__link' to={url}>{titel}</NavLink>
            ))
          }
        </nav>
      </Container>
    </HeaderBottomEl>
  )
}
