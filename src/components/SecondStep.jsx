import React from "react";
import { StyleStepForm } from "./FirstStep";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import topgun from "../assets/topgun.png";
import bullettrain from "../assets/bullettrain.png";
import thor from "../assets/thor.png";
import purpleheart from "../assets/purpleheart.jpeg";
import wakanda from "../assets/wakanda.jpg";
import godfather from "../assets/godfather.png";
import angrybirds from "../assets/angrybirds.png";
import madagascar from "../assets/madagascar.png";
import pets from "../assets/secretlifepets.png";

function SecondStep(props) {
  const { movies, setMovies } = props;

  return (
    <StyleStepForm>
      <div className="question-container">
        <p>Question 2 of 3</p>
        <BsCircle /> <BsCircleFill /> <BsCircle />
      </div>

      <div className="text-container">
        <h1>Which one do you like the most?</h1>
      </div>

      {movies === "grayman" && (
        <div className="movie-images" id="choice1">
          <img src={topgun} id="topgun" alt="topgun movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={bullettrain} id="bullettrain" alt="bullettrain movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={thor} id="thor" alt="thor movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>
      )}

      {movies === "blonde" && (
        <div className="movie-images" id="choice2">
          <img src={wakanda} id="wakanda" alt="black panther movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={purpleheart} id="purpleheart" alt="purple hearts movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={godfather} id="godfather" alt="godfather movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>
      )}

      {movies === "minions" && (
        <div className="movie-images" id="choice3">
          <img src={angrybirds} id="angrybirds" alt="angry birds movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={madagascar} id="madagascar" alt="madagascar movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={pets} id="pets" alt="secret life of pets movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>
      )}
    </StyleStepForm>
  );
}

export default SecondStep;
