
import {Route, Routes} from "react-router";
import HomePage from "./Home/HomePage";
import RandomDogsPage from "./Random Dogs/RandomDogsPage";
import GalleryPage from "./Gallery/GalleryPage";

function App() {
  return (
      <div className={"app-container"}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/randogs" element={<RandomDogsPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>

          </Routes>
      </div>


  );
}

export default App;
