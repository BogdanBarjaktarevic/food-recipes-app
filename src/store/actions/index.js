import foodFork from "../../apis/foodFork";

export const fetchRecipes = term => {
    return dispatch => {
        dispatch(loadingRecipes('recipes'))
        foodFork.get('/search', {
            params: {
                q: term
            }
        })
        

        .then(response => {
            dispatch(setRecipes(response.data.recipes))
            dispatch(fetchSingleRecipe(response.data.recipes[0].recipe_id))
            dispatch(setLikes())
        })

        .catch(error => {
            console.log(error)
        })
    }
}

export const loadingRecipes = (place) => {
    return {
        type: "LOADING_RECIPES",
        place: place
    }
}

export const setRecipes = recipes => {
    return {
        type: "FETCH_RECIPES",
        payload: recipes
    }
}

export const fetchSingleRecipe = recipe_id => {
    return dispatch => {
        dispatch(loadingRecipes('single'))
        foodFork.get('/get', {
            params: {
                rId: recipe_id
            }
        })
        .then(response => {
            dispatch(selectedRecipe(response.data.recipe))
            dispatch(setIngredients(response.data.recipe.ingredients))
        })
    }
}

export const selectedRecipe = recipe => {
    return {
        type: 'SELECTED_RECIPE',
        payload: recipe
    }
}

export const setIngredients = ingredients => {
    return {
        type: 'SET_INGREDIENTS',
        payload: ingredients
    }
}

export const checkIngredient = index => {
    
    return {
        type: 'CHECK_INGREDIENT',
        payload: index
    }
}

export const addPrice = (index, price) => {
    return {
        type: 'ADD_PRICE',
        payload: {
            index,
            price
        }
    }
}

export const updateTotalPrice = () => {
    return {
        type: 'UPDATE_TOTAL_PRICE'
    }
}

export const likeRecipe = recipe => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LIKE_RECIPE',
        payload: recipe
        })
        localStorage.setItem('liked', JSON.stringify((getState().likes)));
    }

}

export const setLikes = () => {
    let bookmarksExists = [];

    let setBookmarks = localStorage.getItem('liked');
    if(!setBookmarks){
      bookmarksExists = []
    }else {
      bookmarksExists = JSON.parse(setBookmarks)
    }

    return {
        type: "SET_LIKES",
        payload: bookmarksExists
    }
}