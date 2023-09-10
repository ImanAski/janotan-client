import { useState } from "react";
import "./styles/App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/janotan-client/">
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
