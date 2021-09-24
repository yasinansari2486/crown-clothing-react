import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl} = item;
    return (
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
                <i class="fas fa-shopping-cart fa-1x" onClick={()=> addItem(item)}></i>
                <button>Buy Now</button>
            </div>
           
        </div>
        
    </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}
)
export default connect(null, mapDispatchToProps)(CollectionItem)
