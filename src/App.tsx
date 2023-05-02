import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu1 from "./components/Menu1";

function App() {
  return (
    <div>   
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/menu/:id" element={<Menu1/>}  />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;