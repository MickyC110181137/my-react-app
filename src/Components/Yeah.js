import './Yeah.css'
import React from 'react'
import Slider from './Slider/Slider';

function yeah({number,setNumber}){
 
    return (
        <main>
            <div className='row'>
                <div className="container">
                    <h1>COUNTER</h1>
                    <div className='size'>
                        <span className= {`value ${number > 0 ? 'text-green': 'text-red'} ${number === 0 && 'text-black'}` }>
                        {number}
                        </span>
                    </div>

                    <div className="button-container">
                        {number > -5 &&<button className="btn decrease" onClick= {() =>{setNumber(number - 1);}}>decrease</button>} 
                        <button className="btn reset" onClick= {() =>{setNumber(0);}}>reset</button>
                        {number < 5 &&<button className="btn increase" onClick= {() =>{setNumber(number + 1);}}>increase</button>}
                    </div>
                </div>
            
                <div className='flex'>
                    <span class="slider-span" id="slider-span1"></span>
                    <span class="slider-span" id="slider-span2"></span>
                
                    <div class="img-slider">
                        <div class="slides-div" id="slide-1">
                            <img src={require('kick00.png')} alt="" class="img1" id="img1"></img>
                            <button class="button1" id="button-1"></button>
                        </div>
                    </div>
                    <div class="img-slider">
                        <div class="slides-div" id="slide-2">
                            <img src={require('runback00.png')} alt="" class="img2" id="img2"></img>
                            <button class="button2" id="button-2"></button>
                        </div>
                    </div>
                </div>
            </div>

            <Slider />
        </main>
    )
}


export default yeah;