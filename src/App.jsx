import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              maxWidth: "500px",
              minHeight: "60px",
              fontSize: "1rem",
              wordBreak: "break-word",
            },
          }}
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
