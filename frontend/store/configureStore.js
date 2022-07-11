import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducer from '../reducers';
import rootSaga from '../sagas';


// 미들웨어를 작성할 때는 아래처럼 3단 고차함수를 가지는 형식이다.
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {

//     // if (typeof action === 'function') {
//     //     return action(dispatch, getState);
//     // }
//     console.log(action);
//     return next(action);
// }


const configureStore = () => {
    // 개발용 미들웨어, 배포용 미들웨어 설정(리덕스의 기능확장)
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
    const store = configureStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    
    return store;
};

const wrapper = createWrapper(configureStore, {
    // debug를 쓰면 개발할 때 자세한 설명을 볼 수 있다.
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;