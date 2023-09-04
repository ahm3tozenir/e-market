import { Route,Routes } from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact";
import Nvbr from "./components/nvbr";
import Basket from "./pages/basket";

function App() {
  return (
    <>
      <Nvbr/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sepetim" element={<Basket/>}/>
      </Routes>
    </>
  );
}

export default App;


