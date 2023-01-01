import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyleFooter>
      <p>
        <a href="/">Privacy Policy</a>
      </p>
      <p>
        <a href="/">Terms of Use</a>
      </p>
    </StyleFooter>
  );
}

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  p {
    margin-right: 1%;
    margin-left: 1%;
    color: lightgrey;
  }

  a {
    text-decoration: none;
    color: lightgrey;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Footer;