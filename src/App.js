import { BrowserRouter , Routes, Route } from "react-router-dom";

import {About} from "./components/About"

import {Login} from "./components/Login"
import {Home} from "./components/Home"
import { Pagenotfound } from "./components/pagenotfound";

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
        
                <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                
                  <Route path="login" element={<Login />} />
                  <Route path="*" element={<Pagenotfound />} />
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
