import { createStore , applyMiddleware} from "redux"
import { rootReducer } from "./reducer/rootReducer"
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk,sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middleware))
    
sagaMiddleware.run(rootSaga)
    


