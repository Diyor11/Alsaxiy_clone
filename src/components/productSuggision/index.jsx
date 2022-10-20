import {SuggisstionEl} from './suggistion.styles'
import BookCard from './components/bookCard'
import ProductCard from '../../components/productsReview/components/productCard'

export default function Suggistion({books, products}) {
  return (
    <SuggisstionEl>
        <BookCard books={books} />
        {products?.map((product, key) => (
            <ProductCard {...product} key={key} />
        ))}
        <iframe id="preview" style={{border: '0', height: '460px', width: '100%', boxShadow: '0 0 16px 3px rgba(0,0,0,.2)'}} src="https://xn--r1a.website/s/asaxiyuz" title='Join us telegram'></iframe>
    </SuggisstionEl>
  )
}
