import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload

            const isAlready=state.items.find(i=>i.id===item.id)

            state.totalQuantity++
            if(!isAlready){
                state.items.push({
                    ...item,
                    quantity:1
                })
            }
            else{
                isAlready.quantity++
            }
        },
       deleteFromCart:(state,action)=>{
        const id=action.payload

        //for reduce the quantity using the is Already component in normal delete also added
  
        const isAlready=state.items.find(i=>i.id===id)
         
        if(!isAlready) return

         state.totalQuantity--

         if(isAlready.quantity===1){
            state.items.filter(i=>i.id!==id)
         }else{
            isAlready.quantity--
         }
       },
      removeItemFromCart: (state, action) => {
            const id = action.payload

            const existingItem = state.items.find(i => i.id === id)

            if (!existingItem) return

         
            state.totalQuantity -= existingItem.quantity 

          
            state.items = state.items.filter(i => i.id !== id) 
        },
     
    }
})

export const {addToCart,deleteFromCart,removeItemFromCart}=cartSlice.actions

export default cartSlice.reducer