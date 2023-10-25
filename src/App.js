import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Resume from  "./components/Resume";

const App = () => {
  return(
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
              <Route  path = "/" element={<Home />} />
              <Route  path = "/about" element={<About />}/>
              <Route  path = "/resume" element={<Resume />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
