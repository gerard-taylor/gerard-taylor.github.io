import React from 'react';
import Hero from './Hero';
import useProjectData from 'hooks/useProjectData';
import AwesomeSlider from 'react-awesome-slider';
import ProjectDetailsModal from 'components/ProjectDetailsModal'
//import AwesomeSliderStyles from "scss/light-slider.scss";
//import AwesomeSliderStyles2 from "scss/dark-slider.scss";

const filePath = "res_primaryLanguage.json";
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
  >
    {imgEl}
  </AwesomeSlider>
  )
  return (
    <React.Fragment>
      <Hero Image={Image}/>
      {props.children}
    </React.Fragment>
  )
}

export default Project;