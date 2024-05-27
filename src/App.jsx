import React from "react";

import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import CardKondan from "./components/CardKondan";
import Slideshow from "./components/Slideshow";
function App() {
  return (
    <div>
    <Main/>
   <Menu/>
   <Slideshow/>
   <CardKondan/>
    </div>
  );
}

export default App;