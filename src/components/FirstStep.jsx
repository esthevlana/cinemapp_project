import React from "react";
import grayman from "../assets/grayman.png";
import blonde from "../assets/blonde.png";
import minions from "../assets/minions.png";
import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

function FirstStep(props) {
    const {movies, setMovies} = props

  return (
    <StyleStepForm>
      <div className="question-container">
        <p>Question 1 of 3</p>
        <BsCircleFill /> <BsCircle /> <BsCircle />
      </div>

      <div className="text-container">
        <h1>Choose one of the three movies</h1>
      </div>

      <div className="movie-images">
        <img  src={grayman} id="grayman" alt="grayman movie image" onClick={(e) => {setMovies(e.target.id)}}/>
        <img src={blonde} id="blonde" alt="blonde movie image" onClick={(e) => {setMovies(e.target.id)}}/>
        <img src={minions} id="minions" alt="minions movie image" onClick={(e) => {setMovies(e.target.id)}}/>
      </div>
    </StyleStepForm>
  );
}

export const StyleStepForm = styled.div`
  .question-container {
    box-sizing: border-box;
    position: absolute;
    width: 220px;
    height: 97px;
    left: calc(50% - 220px / 2);
    top: 8em;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #22daa8;
    padding: 0.1em 0 0.1em 0;
  }

  .text-container {
    padding: 1.5em 0 1.5em 0;
    position: relative;
  }

  .text-container h1 {
    color: #ffffff;
    margin-top: 7%;
  }

  .movie-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1vh;
  }

  .movie-images img {
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 8px;
    cursor: pointer;
  }

  img:hover {
    opacity: 0.8;
  }

  .FadeEffect {
    background-color: white;
  }
`;

export default FirstStep;
