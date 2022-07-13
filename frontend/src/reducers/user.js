import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	userId: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signUp: (state, action) => {
			console.log('here: ' + action.payload);
			state.userId = action.payload;
		},
	},
});

export default userSlice;
