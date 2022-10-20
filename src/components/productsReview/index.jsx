import {Grid} from '@mui/material'
import ProductCard from './components/productCard'
import {ProductsEl} from './product.styles'
export default function Products({products ,title}) {
  return (
    <ProductsEl>
      <h2 className="title">{title}</h2>
      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid item md={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </ProductsEl>
  )
}
