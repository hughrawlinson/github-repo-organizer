import ReactDOM from "react-dom";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./reducers/userLoginSlice";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    reducer,
    userLoginReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

sagaMiddleware.run(sagas);
store.dispatch({ type: "INIT" });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
