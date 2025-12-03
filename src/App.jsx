import React, { useContext } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./component/Navigation";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Footer from "./component/Footer";
import Mens from "./pages/Mens";
import Woman from "./pages/Woman";
import Singleproduct from "./pages/singleproduct";
import Cart from "./pages/Cart";
import { ContextData } from "./contex/contex";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; 

// install by npm i react-router-dom
const App = () => {
  const nav = useNavigate()
  const location = useLocation()
  const loc = location.pathname.includes('/singleproduct')
  const {Theme,setTheme}=useContext(ContextData)
 
  return (
    <div className={Theme}>
      {!loc && <Navigation />}

      <button onClick={()=>{
         nav(-1)
     }}>Back</button>
      <button onClick={()=>{
         nav(+1)
     }}>Next </button>


      <FontAwesomeIcon className="modes"
  icon={Theme === "dark" ? faMoon : faSun}
  onClick={() => setTheme(Theme === "dark" ? "light" : "dark")}
/>


         
      <Routes>
        <Route path="*" element={<NotFound />} /> {/* used for known type */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:prod" element={<Singleproduct />} />
        <Route path="/cart" element={<Cart />} />

        {/* nested routes */}

        <Route path="/product" element={<Product />} >
          <Route path="mens" element={<Mens />} />
          <Route path="woman" element={<Woman />} />
        </Route>



      </Routes>
{!loc&& <Footer />   }
      
    </div>
  );
};

export default App;
