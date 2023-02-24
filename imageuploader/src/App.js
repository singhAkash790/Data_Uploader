import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from "./page/Auth/Login";
import Allimage from "./page/ImageUploader/Allimage";
import Image from "./page/ImageUploader/Image";
import Signup from "./page/Auth/Signup";
// import * as te from "tw-elements";
import { Register } from "./page/Auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/UploadImage" element={<Image />} />
          <Route path="/Allimage" element={<Allimage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
