import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';


import './collection-item.styles.scss';

const CollectionItem = ({item, addItem,history }) => {
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
                <i className="fas fa-shopping-cart fa-1x" onClick={()=> addItem(item)}></i>
                <button 
                onClick={()=>{ addItem(item); 
                history.push('/checkout');}}
                >
                    Buy Now
                </button>
            </div>
           
        </div>
        
    </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}
)
export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
