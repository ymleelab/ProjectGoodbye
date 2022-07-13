import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    willList: [],     // 유언장 리스트 
}

// 테스트 값입니다.
// const dummyWills = {
//     title: '유언장-2',
//     content: '내용-2',
//     userId: '2',
//     receivers: ['한 명', '두 명']
// }

// createSlice에는 내부적으로  createAction and createReducer 를 사용한다.
// 따라서 자동으로 action과 리듀서를 생성한다.

const willSlice = createSlice({
    name: 'wills',
    initialState,
    reducers: {
        getWills(state, action) {
            const { lists } = action.payload;
            const listLength = lists.length;
            const quotient = parseInt(listLength / 6);  // 몫
            const remainder = listLength % 6;           // 나머지
            const newList = [];
            for (let i = 0; i < quotient; i++) {
                newList.push(lists.slice(i*quotient, i*quotient + 6));                
            }
            newList.push(lists.slice(6*quotient, 6*quotient + remainder));
            state.willList = [...newList];
        },
        removeWill(state, action) {
            const newList = state.willList.filter(will =>
                will._id !== action.payload.will._Id
            );
            state.willList = [...newList];
        }
    }
})


export const WillACTIONS = {
    getWills: willSlice.actions.getWills,
    removeWill: willSlice.actions.removeWill,
};


export default willSlice.reducer;