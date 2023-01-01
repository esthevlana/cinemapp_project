//Components
import "./App.css";
import sitelogo from "./assets/websitelogo.png";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import LastStep from "./components/LastStep";
import Footer from "./components/Footer";
import { useState } from "react";

//Hooks
import { EachStep } from "./hooks/EachStep";

function App() {
  const [movies, setMovies] = useState("click on a movie");

  const eachComponent = [
    <FirstStep movies={movies} setMovies={setMovies} />,
    <SecondStep movies={movies} setMovies={setMovies} />,
    <ThirdStep movies={movies} setMovies={setMovies}/>,
    <LastStep movies={movies} />,
  ];

  const {currentStep, currentComponent, changeStep} = EachStep(eachComponent)

  return (
    <div className="App">
      <img src={sitelogo} className="app-logo" alt="logo home" />
      <div className="steps-container">
        <div onClick={(e) => changeStep(currentStep + 1, e)}>
          <div className="first-screen">{currentComponent}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
