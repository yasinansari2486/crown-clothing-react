import React from 'react';
import { Route } from 'react-router';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component';

// import { firestore } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        
    }

    render(){
        const {match} = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`}  component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}
export default ShopPage;