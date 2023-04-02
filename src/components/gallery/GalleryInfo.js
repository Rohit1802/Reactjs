import React from "react";
import "./gallery.css";
import Cocktail from '../../img/imgContact/cocktail.svg'
import Drink from "../../img/imgContact/mix g.svg";

function GalleryInfo() {
    return (
        <div className="GalleryInfo">
            <div className="drinkImg">
                <img src={Cocktail} className="left" />
            </div>
            <div className="info">
                <p>
                    Satisfying people’s hunger for life’s simple  
                    pleasures. Make people
                    happy, have some fun and be number one. The pleasure 
                    of finding the difference.
                </p>
            </div>
            <div className="fruitImg">
                <img src={Drink} className="right" />
            </div>
        </div>
    );
}

export default GalleryInfo;
