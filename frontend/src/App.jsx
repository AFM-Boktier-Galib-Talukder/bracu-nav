import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloPage from "./pages/hello";
import HomePage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
