import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Publish from "./components/Publish";
import Podcasts from "./components/Podcasts";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ListenPodcast from "./components/listenPodcast";
import Footer from "./components/Footer";
import ManagePodcast from "./components/ManagePodcast";
import ManageUser from "./components/ManageUser";
import AuthContextProvider from "./Context/userAuthContext";



function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>

    <Header />
     
     <Routes>
       <Route element={<Home />} path="/home" />
       <Route element={<Login />} path="/login" />
       <Route element={<Signup />} path="/signup" />       
       <Route element={<ListenPodcast />} path="/listenPodcast/:id" />
       <Route element={<Podcasts />} path="/podcasts" />
       <Route element={<Publish />} path="/publish" />
       <Route element={<ManagePodcast />} path="/managepodcast" />
       <Route element={<ManageUser />} path="/manageuser" />
       <Route path="/" element={<Navigate replace to="/home" />} />       
     </Routes>
     <Footer/>
    </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
