import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";
import About from "./pages/About";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/notespage"
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/logout" element={<LogoutPage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
