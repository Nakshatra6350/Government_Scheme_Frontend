import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
const root = ReactDOM.createRoot(document.getElementById("root"));
Kommunicate.init("bcc7c598545c26189d5f06a8e89d3e57", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
