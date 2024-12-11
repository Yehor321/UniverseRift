import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/screen/landingPage";
import Header from "./components/basic/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
