import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    receiverList: [],     // 수신자 리스트 
}


const receiverSlice = createSlice({
    name: 'receivers',
    initialState,
    reducers: {
        getReceivers(state, action) {
            
        },
    }
})


export const RECEIVERACTIONS = {
    getWills: receiverSlice.actions.getReceivers,
};


export default receiverSlice.reducer;