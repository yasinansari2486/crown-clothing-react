import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';


import { CollectionItemContainer, CollectionButton, BackgroundImage, CollectionFooterContainer, CollectionInfoContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem,history }) => {
    const { name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage  className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <CollectionInfoContainer>
                    <span className="name">{name}</span>
                    <span className="price">&#36; {price}</span>
                </CollectionInfoContainer>
                <CollectionButton>
                    <i className="fas fa-shopping-cart fa-1x" onClick={()=> addItem(item)}></i>
                    <button 
                    onClick={()=>{ addItem(item); 
                    history.push('/checkout');}}
                    >
                        Buy Now
                    </button>
                </CollectionButton>
            
            </CollectionFooterContainer>
        
        </CollectionItemContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}
)
export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
