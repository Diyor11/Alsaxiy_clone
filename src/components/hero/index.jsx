import { HeroEl } from "./hero.styles";
import { Grid } from '@mui/material'

import Corousel from './component/corousel'
import DayProduct from "./component/dayProduct";

export default function Hero() {
  return (
    <HeroEl>
        <Grid container spacing={2}>
            <Grid item md={9}>
                <Corousel />
            </Grid>
            <Grid item md={3}>
              <DayProduct />
            </Grid>
        </Grid>
    </HeroEl>
  )
}
