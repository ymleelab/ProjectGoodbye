import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    willList: [
        {
            title: '유언장-1',
            content: '내용-1',
            userId: '1',
            receivers: Array(30).fill('').map((item, i) => `${i + 1}번째 사람`),
        }
    ],     // 유언장 리스트 
}

// 테스트 값입니다.
const dummyWills = {
    title: '유언장-2',
    content: '내용-2',
    userId: '2',
    receivers: ['한 명', '두 명']
}

// createSlice에는 내부적으로  createAction and createReducer 를 사용한다.
// 따라서 자동으로 action과 리듀서를 생성한다.

const willSlice = createSlice({
    name: 'wills',
    initialState,
    reducers: {
        getList(state, action) {
            willList = [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    userId: action.payload.userId,
                    receivers: [...action.payload.receivers]
                }
            ]
        },
    }
})


export const ACTIONS = {
    getWills: willSlice.actions.getList,
};


export default willSlice.reducer;