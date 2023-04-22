import React from 'react'
import '../components/Slider.css'
function Slider() {
  return (
    <div className='container'>
      <h4 className='heading'>Watch Seasons</h4>
      <div className='card-space'>
        <div className='card'>
            <img className='card-image' src="..\src\assets\images\stranger_things_S1.jpg" alt="" />
            <h6 className='card-text'>Season 1</h6>
        </div>
        <div className='card'>
            <img className='card-image' src="..\src\assets\images\stranger_things_S2.jpg" alt="" />
            <h6 className='card-text'>Season 2</h6>
        </div>
        <div className='card'>
            <img className='card-image' src="..\src\assets\images\Stranger_Things_season_3.png" alt="" />
            <h6 className='card-text'>Season 3</h6>
        </div>
        <div className='card'>
            <img className='card-image' src="..\src\assets\images\stranger_things_S4.jpg" alt="" />
            <h6 className='card-text'>Season 4</h6>
        </div>
      </div>
    </div>
  )
}

export default Slider
