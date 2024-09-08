// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Asegúrate de que importes thunk correctamente
import rootReducer from './redux/reducers'; // Asegúrate de que esta ruta sea correcta
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
