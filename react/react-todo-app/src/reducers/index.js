import {combineReducers} from "redux";


const defaultCategory = {code: 'all', name: 'All'};
const defaultCategories = [];


const selectedCategoryReducer = (state = defaultCategory, action) => {
    if (action.type === 'CATEGORY_SELECTED') {
        let newState = { ...action.payload };
        return newState;
    }

    return state;
};



const categoriesReducer = (state = defaultCategories, action) => {
    if (action.type === 'GET_CATEGORIES') {
        return action.payload;
    }
    return state;
}

const postsReducer = (state = [], action) => {

    if (action.type === 'GET_POSTS') {
        return action.payload;
    }

    return state;
}


const appReducers = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer
});


export default appReducers;



