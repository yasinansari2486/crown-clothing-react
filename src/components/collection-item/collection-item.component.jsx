import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id,name,price,imageUrl}) => (
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="collection-footer">
            <div className="collection-info">
                <span className="name">{name}</span>
                <span className="price">&#36; {price}</span>
            </div>
            <div className="collection-btn">
                <i class="fas fa-shopping-cart fa-1x"></i>
                <button>Buy Now</button>
            </div>
           
        </div>
        
    </div>
)

export default CollectionItem;
