import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";
// import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";

import Footer from "./components/Footer";
import Homealumni from "./pages/Homealumni";
import Homemember from "./pages/Homemember";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Routes>
          {<Route path="/" element={<Home />} />}
          {<Route path="/homealumni" element={<Homealumni />} />}
          {<Route path="/homemember" element={<Homemember />} />}
          <Route path="/login" element={<Login />} />
          {<Route path="/alumni" element={<Alumni />} />}

          { <Route path="/blogs" element={<Blogs />} />}

          {/* 
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          
          <Route path="*" element={<NotFound />} />    */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
