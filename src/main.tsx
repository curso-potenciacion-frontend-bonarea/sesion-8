import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/nunito";
import "./styles/index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
