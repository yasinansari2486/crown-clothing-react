import React from "react";
import CollectionDescription from '../../components/collection-description/collection-description.component'
import { DescriptionPageContainer } from "./description-page.styles";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const DescriptionPage = (props) => {
    // console.log()
    return(
    <DescriptionPageContainer> 
        {
            props.collections.map(({items,title}) => (
                items.map((item) => (
                item.id == props.match.params.id && <CollectionDescription key={item.id} item={item} category={title} />
                ))
            ))
        }              
    </DescriptionPageContainer>
)}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(DescriptionPage);