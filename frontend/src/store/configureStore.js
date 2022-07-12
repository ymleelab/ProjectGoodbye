// import { createWrapper } from 'next-redux-wrapper';
// import {
// 	applyMiddleware,
// 	legacy_createStore as createStore,
// 	compose,
// } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';

// import reducer from '../reducers';
// import rootSaga from '../sagas';

// const loggerMiddleware =
// 	({ dispatch, getState }) =>
// 	(next) =>
// 	(action) => {
// 		console.log(action);
// 		return next(action);
// 	};

// const configureStore = () => {
// 	const sagaMiddleware = createSagaMiddleware();
// 	const middlewares = [sagaMiddleware, loggerMiddleware];
// 	const enhancer =
// 		process.env.NODE_ENV === 'production'
// 			? compose(applyMiddleware(...middlewares))
// 			: composeWithDevTools(applyMiddleware(...middlewares));
// 	const store = createStore(reducer, enhancer);
// 	store.sagaTask = sagaMiddleware.run(rootSaga);
// 	return store;
// };

// const wrapper = createWrapper(configureStore, {
// 	debug: process.env.NODE_ENV === 'development',
// });

// export default wrapper;




import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from '../reducers';


const store = () => configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});


// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 store함수를 정의해서 넘기는것이다.

const wrapper = createWrapper(store, {
	debug: process.env.NODE_ENV === 'development',
});

export default wrapper;




