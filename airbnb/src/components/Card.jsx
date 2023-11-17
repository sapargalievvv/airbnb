import React from "react";

export default function Card(props) {
    return (
        <>
            <div className="card">
                {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
                <img src = {`src/images/${props.img}`} alt="" className="card-image" />
                <div className="card-stats">
                    <img src="src/images/star.svg" alt="" className="star" />
                    <span className="rating">{props.rating}</span>
                    <span className="grey">{`(${props.reviewCount}) •`}</span>
                    <span className="grey">{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </>
    )
}