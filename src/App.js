import { BrowserRouter , Routes, Route } from "react-router-dom";
import  {Home} from "./components/Home"
import {About} from "./components/About"

import {Login} from "./components/Login"
import {Layout} from "./components/layout"



import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
         
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
