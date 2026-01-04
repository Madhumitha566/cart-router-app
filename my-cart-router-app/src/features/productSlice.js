import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
    },
    
    reducers: { 
   
        setLoading: (state, action) => {
            state.loading = action.payload; 
        },
        setProducts: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }
    }
})


export const { setLoading, setProducts } = productSlice.actions;
export default productSlice.reducer;