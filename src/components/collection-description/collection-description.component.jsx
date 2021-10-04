import React from "react";
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import { CollectionDescriptionContainer ,CollectionItemContainer, CollectionButton, BackgroundImage, CollectionHeaderContainer, CollectionInfoContainer, DescriptionContainer,Description, ProductName } from './collection-description.styles';

const CollectionDescription = ({item,category, addItem, history}) => {
    console.log(item);
    const {name, price, imageUrl } = item ;
    return (
        <CollectionDescriptionContainer>
            <BackgroundImage  className='image' imageUrl={imageUrl}/>
            <CollectionItemContainer>
                <CollectionHeaderContainer>
                    <ProductName>{name}</ProductName>
                    <CollectionInfoContainer>
                        <span>Category: {category}</span>
                        <span>Price: &#36; {price}</span>
                    </CollectionInfoContainer>
                </CollectionHeaderContainer>
                <DescriptionContainer>
                    <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum.</Description>
                </DescriptionContainer>
                <CollectionButton>
                    <button onClick={()=>{ addItem(item); }}>
                        Add to Cart
                        </button>
                        <button 
                        onClick={()=>{ addItem(item); 
                        history.push('/checkout');}}
                    >
                            Buy Now
                    </button>
                </CollectionButton>
            </CollectionItemContainer>
        </CollectionDescriptionContainer>   
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}
)

export default withRouter(connect(null, mapDispatchToProps)(CollectionDescription))