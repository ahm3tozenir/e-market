import { Route,Routes,Navigate } from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact";
import Nvbr from "./components/nvbr";
import Basket from "./pages/basket";
import Footer from "./components/footer";
import Subs from "./pages/subs";
import Faq from "./pages/faq";
import Login from './pages/login'
import Register from "./pages/register"
import Index404 from "./pages/index404";



function App() {
  return (
    <>
      <Nvbr/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sepetim" element={<Basket/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/subscription" element={<Subs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/404" element={<Index404/>}/>
        <Route path="/*" element={<Navigate to={'/404'}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


