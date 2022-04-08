import React from 'react';
import Hero from './Hero';

function Project (props:React.PropsWithChildren<{image:string}>) {
  return (
    <React.Fragment>
      <Hero image={props.image}/>
      {props.children}
    </React.Fragment>
  )
}

export default Project;