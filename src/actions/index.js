import { SET_RECENT_POSTS } from './types.js';
import axios from 'axios';


export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get(
            'https://eziura.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                console.log('response', response.data.portfolio_items);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.portfolio_items
                });
            }) 
            .catch(error => {
                console.log('error', error);
            });
    }
}