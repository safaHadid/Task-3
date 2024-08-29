import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ style, ...props }) => {
  return (
    <div className='property-card' style={style}>
        <img src={props.image} alt={props.name} />
        <div className="price-and-type">
            <div className="properties-type">{props.type}</div>
            <div className="property-price">{props.price}</div>
        </div>
        <div className="property-name">{props.name}</div>
        <div className="property-description">
            <div className='bedrooms-and-bathrooms'>
              <div>Bedrooms: <span>{props.bedrooms}</span></div>
              <div>Bathrooms: <span>{props.bathrooms}</span></div>
            </div>
            <div className='area-and-floor'>
              <div>Area: <span>{props.area}</span></div>
              <div>Floor: <span>{props.floor}</span></div>
            </div>
            
            <div>Parking: <span>{props.parking} spots</span></div>
        </div>
        <hr style={{padding: "10px 0"}} />
        <div className="property-button">
            <button>Schedule a visit</button>
        </div>
    </div>
  );
}

export default PropertyCard;
