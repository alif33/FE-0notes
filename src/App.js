import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import Article from "./pages/Article";
import AddPackage from "./pages/AddPackage";

function App() {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-article" element={<AddArticle/>} />
          <Route path="/update-article/:_id" element={<EditArticle/>} />
          <Route path="/article/:_id" element={<Article/>} />
          <Route path="/make-package" element={<AddPackage/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
