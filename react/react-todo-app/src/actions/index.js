import * as CategoriesApi from "../categories_api";
import * as PostsApi from "../posts_api";


export const selectCategory = (category) => {
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    }
}

export const getCategories = () => {
    return (dispatch) => {
        CategoriesApi.getCategories()
            .then(categories => {
                dispatch({
                    type: 'GET_CATEGORIES',
                    payload: categories
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const getPosts = () => {
    return (dispatch) => {
        PostsApi.getPosts()
            .then(posts => {
                dispatch({
                    type: 'GET_POSTS',
                    payload: posts
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}


























