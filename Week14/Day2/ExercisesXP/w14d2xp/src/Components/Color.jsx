import React, {useState, useEffect} from "react";

function FavoriteColor() {
    
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => { setFavoriteColor("yellow");}, [] );

    function changeColor() {
        setFavoriteColor("blue");
       }

    return (
        <div>
            <h1>My favorite color is {favoriteColor}</h1>
            <input type='button' value='Change color' onClick={changeColor} />
        </div>
    );
}

export default FavoriteColor;