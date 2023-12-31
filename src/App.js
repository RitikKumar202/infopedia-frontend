import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Dashboard from "./pages/dashboard/Dashboard";
import ManagePosts from "./pages/dashboard/posts/ManagePosts";
import EditPost from "./pages/dashboard/posts/EditPost";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <div className="font-DM_Sans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/article/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ManagePosts />} />
          <Route path="post/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
