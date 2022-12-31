import './App.css';
import { Routes, Route } from "react-router-dom";

import Project from './routes/projects';
import LiteratureReview from './routes/literatureReview';
import About from "./routes/about";
import Blog from './routes/blog';
import Repository from './routes/repositories';

import Navbar from './component/navBar';
import Footer from './component/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/lr" element={<LiteratureReview />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/repositories" element={<Repository />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
