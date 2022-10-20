import { NavLink } from 'react-router-dom'
import {FooterEl} from './footer.styles'
import {Container} from '../../globalStyles'

const features = [
  {
    title: 'Больше не нужно ходить на базар',
    desc: 'У нас выгодные цены и доставка до дома',
    url: '#'
  },
  {
    title: 'Быстрая доставка',
    desc: 'Наш сервис удивит вас',
    url: '#'
  },
  {
    title: 'Удобства для вас',
    desc: 'Быстрое оформление и гарантия на возврат в случае неисправности',
    url: '#'
  },
  {
    title: 'Рассрочка',
    desc: 'Без предоплаты на 3, 6, 9 и 12 месяцев',
    url: '#'
  },
]

const info = {
    title: 'Информация',
    links: [
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
      {
        text: 'Публичная оферта (Пользовательское соглашение)',
        href: '#'
      },
    ]
  }

export default function Footer() {
  return (
    <FooterEl>
      <Container>
        <div className="feature-list">
          {features.map((item, key) => (
            <NavLink to={item.url} key={key} className="feature-list__item">
              <h5 className="feature-list__item--title">{item.title}</h5>
              <p className="feature-list__item--desc">{item.desc}</p>
            </NavLink>
          ))}
        </div>
        <div className="information">
          <div className="information-column">
            <h4 className="information-column__title">Информация</h4>
          </div>
        </div>
  </Container>
    </FooterEl>
  )
}
