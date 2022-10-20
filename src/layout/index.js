import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

// ------- Global Data --------
import store from '../features/store'
import {theme} from '../data/constants'
// ------- Layout Componnets --------
import Header from '../components/header'
import Footer from '../components/footer'

import GlobalStyles, {Container} from '../globalStyles'

export default function Layout({children}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <main>
              <Container>
                {children}
              </Container>
            </main>
            <Footer />
            <GlobalStyles />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
