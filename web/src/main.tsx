import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import App from "./components/App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </Provider>
  </React.StrictMode>
);
