
import React from 'react'
import Styled from './Hero.styles'
import 'scss/hero.scss'
import { Box, Grid } from '@mui/material'

function Hero ({Image}:{Image:JSX.Element}) {
  return (
    <Styled className='Hero' >
      <Grid container spacing={2}>
        <Grid item container xs={12} justifyContent="center">
          <Box width="300px">{Image}</Box>
        </Grid>
      </Grid>
    </Styled>
  )
}




export default Hero