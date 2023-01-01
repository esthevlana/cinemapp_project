import React from "react";
import styled from "styled-components";

function LastStep(props) {
  const { movies } = props;
  
  const openInNewTab = url => {
    window.open(url, '_blank');
  };

  return (
    <StyleLastStep>
      <h2>WATCH NEW MOVIES FOR FREE!</h2>
      <p className="first-sentence">
        Watch any movie online for free without ads!
      </p>
      <p className="second-sentence">Have fun watching your favorite movies!</p>

      {movies === 'batman' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1877830/?ref_=fn_al_tt_1')}>
          <a href='https://www.imdb.com/title/tt1877830/?ref_=fn_al_tt_1' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'spiderman' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0145487/?ref_=fn_al_tt_1')}>
          <a href='https://www.imdb.com/title/tt0145487/?ref_=fn_al_tt_1' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'flash' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0439572/?ref_=fn_al_tt_2')}>
          <a href='https://www.imdb.com/title/tt0439572/?ref_=fn_al_tt_2' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'fury' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt2713180/?ref_=fn_al_tt_1')}>
          <a href='https://www.imdb.com/title/tt2713180/?ref_=fn_al_tt_1' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'johnwick' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt2911666/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt2911666/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'snowpiercer' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1706620/?ref_=nv_sr_srsg_3')}>
          <a href='https://www.imdb.com/title/tt1706620/?ref_=nv_sr_srsg_3' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'greenlantern' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1133985/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1133985/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'immortals' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1253864/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1253864/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'narnia' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0363771/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0363771/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'palmer' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt6857376/?ref_=nv_sr_srsg_3')}>
          <a href='https://www.imdb.com/title/tt6857376/?ref_=nv_sr_srsg_3' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'lorna' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1186369/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1186369/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'dearjohn' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0989757/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0989757/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'beasts' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1365050/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1365050/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'rednotice' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt7991608/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt7991608/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'gijoe' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1583421/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1583421/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'hateful8' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt3460252/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt3460252/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'scarface' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0086250/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0086250/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'unbroken' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1809398/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1809398/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'corpsebride' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0121164/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0121164/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'gremlins' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0087363/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0087363/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'dragon' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0892769/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0892769/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'paul' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt1092026/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt1092026/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'pussinboots' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0448694/?ref_=nv_sr_srsg_3')}>
          <a href='https://www.imdb.com/title/tt0448694/?ref_=nv_sr_srsg_3' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'bossbaby' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt3874544/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt3874544/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'turningred' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt8097030/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt8097030/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'bugslife' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt0120623/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt0120623/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

      {movies === 'insideout' && (
      <div>
        <button onClick={() => openInNewTab('https://www.imdb.com/title/tt2096673/?ref_=nv_sr_srsg_0')}>
          <a href='https://www.imdb.com/title/tt2096673/?ref_=nv_sr_srsg_0' target="_blank">WATCH HERE!</a>
        </button>
      </div>)}

    </StyleLastStep>
  );
}

export const StyleLastStep = styled.div`
  font-family: "Roboto";
  box-sizing: border-box;
  position: relative;
  width: 684px;
  height: 364px;
  left: 28%;
  top: 40px;
  background: #ffffff;
  border: 10px solid #61d6b6;
  border-radius: 10px;

  button {
    position: absolute;
    height: 83px;
    left: 6.14%;
    right: 6.14%;
    bottom: 42px;
    background: #ec5632;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: white;
    font-size: 2em;
    transform: scale(0.9);
    transition: all 0.3s ease-in-out 0.2s;
  }

  button:hover {
    transform: scale(1);
    transition: all 0.3s ease-in-out 0.1s;
  }

  h2 {
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    color: #22daa8;
  }

  .first-sentence {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .second-sentence {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default LastStep;
