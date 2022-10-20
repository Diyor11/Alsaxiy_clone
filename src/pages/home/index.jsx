import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Hero from '../../components/hero'
import {Grid} from '@mui/material'

import ProductsReview from '../../components/productsReview'
import ProductSuggistions from '../../components/productSuggision'

import {getAllProducts} from '../../features/products/productsSlice'
import fakeProducts from '../../data/fakeProducts'
export default function Home() {

  const products = useSelector(state => state.products.products)
  console.log('render')

  const dispatch = useDispatch()
  useEffect(() => {
    // fetch products
    dispatch(getAllProducts(fakeProducts))
  }, [dispatch])


  return (
    <>
      <Hero />
      <Grid container spacing={2}>
        <Grid item md={3}>
          <ProductSuggistions books={[1,3,1]} products={products.slice(0, 2)} />
        </Grid>
        <Grid item md={9}>
          <ProductsReview products={products} title='Cнова в школу' />
        </Grid>
      </Grid>
    </>
  )
}
