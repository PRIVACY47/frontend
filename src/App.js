
import {Home} from "./componets/Home"
import {About} from "./componets/About"
import { Underconstrution } from "./componets/underconstruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />}> </Route>
            <Route path='/about' element = {<About />}> </Route>
            <Route path="*" element= {<Underconstrution />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
