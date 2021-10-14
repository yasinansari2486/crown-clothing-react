import ShopActionTypes from "./shop.types";
import axios from 'axios';
import  url  from '../../url';


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/shopping/product`)
        dispatch(fetchCollectionsStart());
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
        },{})
        console.log(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        console.error( dispatch(fetchCollectionsFailure(error.message)))
    }
}

