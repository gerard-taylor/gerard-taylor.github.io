
import React from 'react'
import Styled from './Hero.styles'
import 'scss/hero.scss'
import { Box, Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/material/styles'

function Hero ({Image, background="basic", title, desc, sx}:
{Image:JSX.Element, background?:string, title:string, desc:string, sx?:SxProps}) {
  return (
    <Styled className='Hero' background={background} sx={sx}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography textAlign="center" variant="h1" sx={{textTransform: "Uppercase"}}>{title}</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item xs={12} lg={3} justifyContent="center">
            <Box width="100%">{Image}</Box>
          </Grid>
        </Grid>
        <Grid item>
          <Typography textAlign="center" variant="h4">{desc}</Typography>
        </Grid>
      </Grid>
    </Styled>
  )
}




export default Hero