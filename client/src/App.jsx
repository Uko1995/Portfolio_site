import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
