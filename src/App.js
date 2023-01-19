import { BrowserRouter , Routes, Route } from "react-router-dom";
import  {Home} from "./components/Home"
import {About} from "./components/About"

import {Login} from "./components/Login"




import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
