import React from "react";
const Card = ({item})=> {
    return(
        
        <div className="card">
        <div className="card-content">{item.category}</div>
        <div className="image">
        </div>
        <div className="shade"></div>
    </div>
    

    )
};
export default Card;
