import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStatusContextProvider } from "./context/status";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStatusContextProvider>
        <App />
        <Toaster />
      </GlobalStatusContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
