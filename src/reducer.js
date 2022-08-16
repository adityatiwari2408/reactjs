export const initalState = {
    basket: [],
    user: null,
};


const reducer = (state, action) => {
    switch (action.type) {
        case "Addtobasket":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "removefrombasket":
            {
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                let newbasket = [...state.basket];
                if (index >= 0) {
                    newbasket.splice(index, 1);
                } else {
                    console.warn(`cant remove product(id:${action.id})as its not in basket!`)
                }
                return {
                    ...state,
                    basket: newbasket
                }
            };
        case "emptybasket":
            return {
                ...state,
                basket: []
            };

        default:
            return state;
    }
}

export default reducer;