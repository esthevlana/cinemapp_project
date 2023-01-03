import React from "react";
import { StyleStepForm } from "./FirstStep";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import batman from "../assets/batman.png";
import spiderman from "../assets/spiderman.png";
import flash from "../assets/flash.png";
import fury from "../assets/fury.png";
import johnwick from "../assets/johnwick.png";
import snowpiercer from "../assets/snowpiercer.png";
import greenlantern from "../assets/greenlantern.png";
import immortals from "../assets/immortals.png";
import narnia from "../assets/narnia.png";
import beasts from "../assets/beastsnonation.png";
import rednotice from "../assets/rednotice.png";
import gijoe from "../assets/gijoe.png";
import hateful8 from "../assets/hateful8.png";
import scarface from "../assets/scarface.png";
import unbroken from "../assets/unbroken.png";
import palmer from "../assets/palmer.png";
import lorna from "../assets/lornasilence.png";
import dearjohn from "../assets/dearjohn.png";
import corpsebride from "../assets/corpsebride.png";
import gremlins from "../assets/gremlins.png";
import dragon from "../assets/dragon.png";
import paul from "../assets/paul.png";
import pussinboots from "../assets/pussinboots.png";
import bossbaby from "../assets/bossbaby.png";
import turningred from "../assets/turningred.png";
import bugslife from "../assets/bugslife.png";
import insideout from "../assets/insideout.png";

function ThirdStep(props) {
    const { movies, setMovies } = props;
  
    return (
      <StyleStepForm>
        <div className="question-container">
          <p>Question 3 of 3</p>
          <BsCircle /> <BsCircle /> <BsCircleFill />
        </div>
  
        <div className="text-container">
          <h1>Which one do you want to watch now?</h1>
        </div>
  
        {/* FIRST CHOICE */}
        {movies === 'topgun' && (
        <div className="movie-images" id="choice1">
          <img src={batman} id='batman' alt="batman movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={spiderman} id='spiderman' alt="spiderman movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={flash} id='flash' alt="flash movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'bullettrain' && (
        <div className="movie-images">
          <img src={fury} id='fury' alt="fury movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={johnwick} id='johnwick' alt="john Wick movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={snowpiercer} id='snowpiercer' alt="snowpiercer movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'thor' && (
        <div className="movie-images">
          <img src={greenlantern} id='greenlantern' alt="green lantern movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={immortals} id='immortals' alt="immortals movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={narnia} id='narnia' alt="narnia movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
            {/* SECOND CHOICE */}
        {movies === 'purpleheart' && (
        <div className="movie-images" id="choice2">
          <img src={palmer} id='palmer' alt="palmer movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={lorna} id='lorna' alt="lornas silence movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={dearjohn} id='dearjohn' alt="dear john movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'wakanda' && (
        <div className="movie-images">
          <img src={beasts} id='beasts' alt="beasts of no nation movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={rednotice} id='rednotice' alt="red notice movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={gijoe} id='gijoe' alt="GI Joe movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'godfather' && (
        <div className="movie-images">
          <img src={hateful8} id='hateful8' alt="hateful 8 movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={scarface} id='scarface' alt="scarface movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={unbroken} id='unbroken' alt="unbroken movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {/* THIRD CHOICE */}
        {movies === 'angrybirds' && (
        <div className="movie-images" id="choice3">
          <img src={corpsebride} id='corpsebride' alt="coprse bride movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={gremlins} id='gremlins' alt="gremlins movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={dragon} id='dragon' alt="how to train your dragon movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'madagascar' && (
        <div className="movie-images">
          <img src={paul} id='paul' alt="paul movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={pussinboots} id='pussinboots' alt="puss in boots movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={bossbaby} id='bossbaby' alt="boss baby movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
        {movies === 'pets' && (
        <div className="movie-images">
          <img src={turningred} id='turningred' alt="turning red movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={bugslife} id='bugslife' alt="a bug's life movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
          <img src={insideout} id='insideout' alt="inside out movie poster" onClick={(e) => {setMovies(e.target.id);}}/>
        </div>)}
  
      </StyleStepForm>
    );
  }
  
  export default ThirdStep;