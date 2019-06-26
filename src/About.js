/* 
** Placeholder for relevant links and documentation.
*/
import React, { Fragment  } from 'react';
import dockerkube from './assets/dockerkube.jpg'

export const About = () => (
  <Fragment className = 'about'>
      <p><strong> </strong>&nbsp;&nbsp;<a href="http://finochio.mynetgear.com">Link to: Application Demo</a></p>
      <p><strong> </strong>&nbsp;&nbsp;<a href="https://github.com/finochio/highspot-coding-exercise">Link to: Documentation and Code</a></p>
      <a href={dockerkube}><img border="0" alt="Docker Hub Build + Kubernetes Dashboards" src={dockerkube} width="768"></img></a>
  </Fragment>
)
