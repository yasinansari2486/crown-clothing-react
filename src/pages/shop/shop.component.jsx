import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import axios from 'axios';
import  url  from '../../url';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component';

// import { firestore } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPagewithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    async componentDidMount() {
        const {updateCollections} = this.props;
        const {data} = await axios.get(`${url}/shopping/product`)
        const transformedCollection = data.map(e =>  {
            const {title, items} = e;
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: e.id,
                title,
                items
            }
        });
            
        const collectionsMap = transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        },{});
        console.log(collectionsMap);
        updateCollections(collectionsMap);
        this.setState({loading: false});
    }
    

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`}  render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPagewithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);