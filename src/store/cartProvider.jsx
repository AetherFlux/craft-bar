import { useReducer } from "react";

import CartContext from "./cartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        //Update item count if it exsists, else add it
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };

    const removeFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id});
    };

    //Object for handling cart data updates to be passed to conext

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;