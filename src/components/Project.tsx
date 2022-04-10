import React from 'react';
import Hero from './Hero';
import useProjectData from 'hooks/useProjectData';
import AwesomeSlider from 'react-awesome-slider';
import { Grid, Typography, Chip, Container } from '@mui/material';
//import AwesomeSliderStyles from "scss/light-slider.scss";
//import AwesomeSliderStyles2 from "scss/dark-slider.scss";

const filePath = window.location.href + "/res_primaryLanguage.json";
function Project (props:React.PropsWithChildren<{name:string}>) {
  const projectData = useProjectData(filePath, props.name);

  let imgEl;
  if (projectData?.images) {
    imgEl = projectData.images.map((elem, i) => {
      return <div key={i} data-src={elem} />;
    });
  }

  const Image = (
    <AwesomeSlider
    //cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
    animation="scaleOutAnimation"
    className="slider-image"
    style={{margin: "40px 0"}}
  >
    {imgEl}
  </AwesomeSlider>
  )
  return (
    <React.Fragment>
      <Hero Image={Image} background={props.name} title={projectData?.title ?? ""} desc={projectData?.description ?? ""} sx={{marginBottom:5}}/>
      <Container>
        <Typography  mb={2} variant="h3" align="center">Project Overview</Typography>
        <Typography  mb={5} variant="h5" align="center">{projectData?.overview ?? ""}</Typography>
        <Typography mb={2} variant="h3" align="center">{projectData?.technologies? "Tools Used" : "" }</Typography>
        <Grid mb={5} container justifyContent="center">
          {projectData?.technologies.map(tech => (
            <Grid item key={tech.name}>
              <Chip 
                icon={<div className={tech.class}></div>}
                label={tech.name} 
                sx={{borderRadius:1, padding:2, fontSize:"1.6rem", color:"#777"}}/>
            </Grid>
          ))}
        </Grid>
        {props.children}
      </Container>
    </React.Fragment>
  )
}

export default Project;