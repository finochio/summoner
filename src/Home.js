/* 
**default landing page for web application.  instantiates card listing
*/
import React from "react";
import Cards from './components/Cards';

/* 
**instantiate card listing  
*/
export const Home = () => (
  <div className="App">
    <Cards/>
  </div>
)
