import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import Article from "./pages/Article";
import AddPattern from "./pages/AddPattern";
import Pattern from "./pages/Pattern";
import AddProject from "./pages/AddProject";
import Project from "./pages/Project";

function App() {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-article" element={<AddArticle/>} />
          <Route path="/update-article/:_id" element={<EditArticle/>} />
          <Route path="/ar/:_id" element={<Article/>} />
          <Route path="/add-pattern" element={<AddPattern/>} />
          <Route path="/pt/:_id" element={<Pattern/>} />
          <Route path="/p/:_id" element={<Project/>} />
          <Route path="/add-project" element={<AddProject/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
