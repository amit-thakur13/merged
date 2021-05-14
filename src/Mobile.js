import React from 'react';
import './Mobile.css'

class Mobile extends React.Component{
    render(){
        return(
            <>
            <h1 class = "title">Mobile & Tablet</h1>
<button class ="title2">View All</button>

<div class="row">
  <div class="column">
    <img src="img_snow.jpg" alt="Snow" style={{width:"100%"}}/>
  </div>
  <div class="column1">
    <img src="img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="column1">
    <img src="img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="column1">
    <img src="img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
</div>
</>
        )
    }
}
export default Mobile