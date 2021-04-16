import ReactDOM from "react-dom";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./features/UserLogin/userLoginSlice";
import gridStateReducer from "./features/RepositoryTable/gridStateSlice";
import repositoriesReducer from "./features/RepositoryTable/repositoriesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repositoriesReducer,
    userLoginReducer,
    gridStateReducer,
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
