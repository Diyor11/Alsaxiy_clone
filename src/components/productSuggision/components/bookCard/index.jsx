import {CardEl} from './book.styles'
import BookLogo from '../../../../assets/images/asaxiy-books.png'
import Book1 from '../../../../assets/images/book1.webp'

export default function BookCard({books}) {
  return (
    <CardEl>
        <div className='header'>
            <div className="header-title">Книги</div>
            <img src={BookLogo} alt='' className='header-logo' />
        </div>

        <ul className='book-list'>
            {[1,2,3].map((book, key) => (
                <li key={key} className='book-list__item'>
                    <img src={Book1} width='80' alt="" />
                    <div className="book-list__item--info">
                        <div className="book-list__item--info__title">
                            Супер чегирма. Элликта машҳур китоб
                        </div>
                        <p className="book-list__item--info__desc">Asaxiy Books китоблари</p>
                    </div>
                </li>
            ))}
        </ul>
    </CardEl>
  )
}
