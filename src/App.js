import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Article from "./pages/Article";
import AddPackage from "./pages/AddPackage";

function App() {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/insert" element={<Insert/>} />
          <Route path="/article/:_id" element={<Article/>} />
          <Route path="/make-package" element={<AddPackage/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
