import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { NotificationUi } from "./components/ui";
import { store } from "./state";
import router from "./router";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <NotificationUi />
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
);
