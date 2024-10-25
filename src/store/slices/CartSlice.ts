import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CartState{
    items: CartItem[];
}

const initialState : CartState = {
    items: []
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) =>{
            const item = state.items.find(item => item.id == action.payload.id)
            if(item){
                item.quantity++
            }else{
                state.items.push(action.payload)
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) =>{
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        empty: (state) =>{
            console.log("empty")
            state.items = []
        },
        increase: (state, action: PayloadAction<number>) =>{
            const item = state.items.find(item => item.id == action.payload)
            if(item){
                item.quantity++
            }
        },
        decrease: (state, action: PayloadAction<number>) =>{
            const item = state.items.find(item => item.id == action.payload)
            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.items = state.items.filter(i => i.id !== item.id)
                }
            }
        }
    }

})


export default cartSlice.reducer






export interface CartItem{
    id: number;
    name: string;
    price: number;
    quantity: number;
}