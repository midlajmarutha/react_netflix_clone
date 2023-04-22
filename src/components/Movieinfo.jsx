import React from "react";
import './Movieinfo.css'

function Movieinfo(){
    return(
        <div className="content">
            <div className="">
                <h5 className="genre">THRILLER  |  HORROR  |  TEEN PROGRAM</h5>
            </div>
            <div className="">
                <h1 className="title">Stranger Things</h1>
                <h5 className="bright">2019  |  DIRECTOR:  <span className="bright-gray">The Duffer Brothers </span>  |  SEASONS:  <span className="bright-gray">4  (34 Episodes)</span></h5>
                <p className="description">This thrilling Netflix drama stars Golden Globe-winning actress Winona Ryder as Jouce Byers, who lives in a small town</p>
            </div>
            <div className="buttons">
                <a href="" className="btn-red">STREAM NOW</a>
                <a href="" className="btn-white-strock">ALL EPISODES</a>
            </div>

        </div>
    )
}

export default Movieinfo;