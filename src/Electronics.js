import React from 'react';
import './Electronics.css'

class Electronics extends React.Component{
    render(){
        return(
            <>
            <h1 class = "title">Electronics</h1>
    <button class="title2">View All</button>

<div class="row">
  <div class="column">
    <img src="1img_snow.jpg" alt="Snow" style={{width:"100%"}}/>
  </div>
  <div class="column">
    <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="column">
    <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
  </div>
  <div class="column">
    <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="column">
    <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
  </div>
</div>


            </>
        )
    }
}
export default Electronics