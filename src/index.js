// libraries
import React from "react";
import ReactDOM from "react-dom";

// import web fonts
import WebFont from 'webfontloader';

// redux middleware galore
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import ReduxToastr from 'react-redux-toastr'

// redux combined reducer
import rootReducer from "./reducers";

// styles
import "./styles/index.css";

// App component
import App from "./App";

// service worker
import registerServiceWorker from "./registerServiceWorker";

const persistConfig = {
  key: "root",
  storage
};

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,900', 'sans-serif']
  }
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
        />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
