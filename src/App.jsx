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
import AddBoard from "./pages/AddBoard";
import Board from "./pages/Board";
import Task from "./pages/Task";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Project from "./pages/Project";
import EditProject from "./pages/EditProject";

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
          <Route path="/add-project" element={<AddProject/>} />
          <Route path="/p/:_id" element={<Project/>} />
          <Route path="/up/:_id" element={<EditProject/>} />
          <Route path="/add-board" element={<AddBoard/>} />
          <Route path="/b/:_id" element={<Board/>} />

          <Route path="/add-task" element={<AddTask/>} />
          <Route path="/update-task/:_id" element={<EditTask/>} />
          <Route path="/t/:_id" element={<Task/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;

