import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
}
    from './types.js';
import axios from 'axios';


export function fetchRecentPosts() {
    return function (dispatch) {
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

export function fetchResultsWithQuery(query, callback) {
    return function (dispatch) {
        axios.get(
            'https://eziura.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                const allItems = response.data.portfolio_items;

                const lowerCaseQuery = query.toLowerCase();

                // Filtrar los posts si el título incluye la query
                const filteredItems = allItems.filter(item => {
                    // Adaptar la propiedad que contiene el "nombre del post" si es diferente
                    const itemName = item.name ? item.name.toLowerCase() : '';
                    return itemName.includes(lowerCaseQuery);
                });

                console.log('Resultados filtrados:', filteredItems);

                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: filteredItems
                });
                if (callback) { callback() }
            })
            .catch(error => {
                console.log('Error al buscar resultados:', error);
            });
    }
}