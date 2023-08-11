import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";

function App() {
  return (
    <div className="font-Recursive">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
