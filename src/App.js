import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Login/Main";
import Upload from "./Components/SubmitPhoto/UpLoad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
