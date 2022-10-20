import HeaderTop from './headerTop'
import HeaderBottom from './headerBottom'
import HeaderMobile from './headerMobile'
import { HeaderEl } from './header.styles'

export default function Header() {
  return (
    <HeaderEl>
        <HeaderTop />
        <HeaderBottom />
        <HeaderMobile />
    </HeaderEl>
  )
}
