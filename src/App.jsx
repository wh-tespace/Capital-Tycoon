import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
function App() {

  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  {/*           <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App
