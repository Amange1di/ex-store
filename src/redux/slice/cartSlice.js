import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, { payload }) {
            let hasInCart = state.items.find(el => el?.id === payload.id);
            if (hasInCart) {
                hasInCart.quantity += 1;
                saveToLocal(state.items)
                return;
            }

            const product = {
                ...payload, 
                quantity: 1
            }
            state.items = [...state.items, product];
            saveToLocal(state.items)
        },
        removeItem(state, { payload }) { 
            state.items = state.items.filter(item => item.id !== payload.id)
        },
        updateCart: (state) => {
            const items = localStorage.getItem(`cart25`) ?? []
            if(items){
                state.items = JSON.parse(items)
            }
        }
    }
})

export const { addItem, removeItem, updateCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer

function saveToLocal (arr) {
    localStorage.setItem(`cart25`, JSON.stringify(arr));
}

