import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bulletin from "./pages/Bulletin";
import DemonstrationCenter from "./pages/DemonstrationCenter";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Registration from "./pages/Registration";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bulletin" element={<Bulletin />} />
      <Route path="/demonstration-center" element={<DemonstrationCenter />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:year" element={<News />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
