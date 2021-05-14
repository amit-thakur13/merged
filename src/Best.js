import React from 'react'
import './best.css'

class Best extends React.Component{
    render(){
        return(
            <>
            <h1>Best Seller</h1>
            <button className="title2">View All</button>
            <div id="container1">
              <div class="block1">Travel Accessories</div>
              <div class="block1">Suitcase & Trolley</div>
              <div class="block1">Wallets & Belts</div>
              <div class="block1">Travel Duffets</div>
            </div>
            <div id="container3">
              <div class="block1">Travel Accessories</div>
              <div class="block1">Suitcase & Trolley</div>
              <div class="block1">Wallets & Belts</div>
              <div class="block1">Travel Duffets</div>
            </div>

            <div id="container">
               <div class="block"></div>
            </div>
            </>
        )
    }
}
export default Best